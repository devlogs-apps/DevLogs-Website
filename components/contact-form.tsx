"use client"

import { useTransition } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { contactSchema, type ContactInput } from "@/lib/contact-schema"
import { submitContact } from "@/app/actions/contact"

export function ContactForm() {
  const [isPending, startTransition] = useTransition()

  const form = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  })

  function onSubmit(values: ContactInput) {
    startTransition(async () => {
      const result = await submitContact(values)
      if (result.success) {
        toast.success(result.message)
        form.reset()
      } else {
        toast.error(result.message)
      }
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mono-label text-slate">
                  Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ada Lovelace"
                    className="h-12 rounded-xl border-transparent bg-mist shadow-none focus-visible:border-ink focus-visible:ring-0"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mono-label text-slate">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    className="h-12 rounded-xl border-transparent bg-mist shadow-none focus-visible:border-ink focus-visible:ring-0"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mono-label text-slate">
                Subject (optional)
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="A bug, an idea, a collaboration…"
                  className="h-12 rounded-xl border-transparent bg-mist shadow-none focus-visible:border-ink focus-visible:ring-0"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mono-label text-slate">
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  rows={6}
                  placeholder="Tell us what's on your mind…"
                  className="resize-none rounded-xl border-transparent bg-mist shadow-none focus-visible:border-ink focus-visible:ring-0"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <button
          type="submit"
          disabled={isPending}
          className="w-full rounded-lg bg-ink px-6 py-4 font-medium text-paper transition-transform duration-300 ease-heavy active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending ? "Sending…" : "Send message"}
        </button>

        <p className="text-center text-sm text-slate">
          We only use your details to reply to this message.
        </p>
      </form>
    </Form>
  )
}
