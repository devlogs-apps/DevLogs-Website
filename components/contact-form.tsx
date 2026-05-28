"use client"

import { useTransition } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { ArrowUpRight } from "lucide-react"
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
                <FormLabel className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ada Lovelace"
                    className="h-11 rounded-xl border-border bg-background/50"
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
                <FormLabel className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    className="h-11 rounded-xl border-border bg-background/50"
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
              <FormLabel className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                Subject <span className="normal-case tracking-normal">(optional)</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="A bug, an idea, a collaboration…"
                  className="h-11 rounded-xl border-border bg-background/50"
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
              <FormLabel className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  rows={6}
                  placeholder="Tell us what's on your mind…"
                  className="resize-none rounded-xl border-border bg-background/50"
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
          className="bg-brand group inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {isPending ? "Sending…" : "Send message"}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </button>

        <p className="text-center text-xs text-muted-foreground">
          We only use your details to reply to this message.
        </p>
      </form>
    </Form>
  )
}
