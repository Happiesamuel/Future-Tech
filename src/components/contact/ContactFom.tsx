"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { useState } from "react";

// 1. Define your schema
const formSchema = z.object({
  firstname: z
    .string({ message: "Enter your First name " })
    .min(2, { message: "First name must be at least 2 characters." }),
  lastname: z
    .string({ message: "Enter your Last name " })
    .min(2, { message: "Last name must be at least 2 characters." }),
  message: z
    .string({ message: "Enter a message " })
    .min(2, { message: "Last name must be at least 2 characters." }),
  phone: z
    .string({ message: "Enter your Phone number" })
    .min(11, { message: "Phone number must be at least 11 characters." }),
  email: z
    .string({ message: "Enter your Email address" })
    .email({ message: "Enter a valid email address." }),
  checked: z
    .boolean({ message: "Accept terms and conditions" })
    .refine((val) => val === true, {
      message: "Accept terms and conditions first",
    }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  // 2. Initialize the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const [sending, setSending] = useState(false);
  // 3. Handle submit
  const onSubmit = (values: FormValues) => {
    setSending(true);
    console.log(values);
    setTimeout(() => {
      setSending(false);
      form.reset();
    }, 3000);
    form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 bg-red  w-full"
      >
        <div className="flex gap-8 sm:flex-row flex-col sm:items-center justify-between">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input
                    className="border border-[#262626] w-full text-zinc-300 bg-[#1a1a1a] placeholder:text-[#666666] focus:border-[#ffd11a]"
                    placeholder="Enter First Name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input
                    className="border border-[#262626] w-full text-zinc-300 bg-[#1a1a1a] placeholder:text-[#666666] focus:border-[#ffd11a]"
                    placeholder="Enter Last Name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-8 sm:flex-row flex-col sm:items-center justify-between">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    className="border border-[#262626] w-full text-zinc-300 bg-[#1a1a1a] placeholder:text-[#666666] focus:border-[#ffd11a]"
                    placeholder="Enter your Email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input
                    className="border border-[#262626] w-full text-zinc-300 bg-[#1a1a1a] placeholder:text-[#666666] focus:border-[#ffd11a]"
                    placeholder="Enter Phone Number"
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
          name="message"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  className="border resize-none border-[#262626] w-full text-zinc-300 bg-[#1a1a1a] placeholder:text-[#666666] focus:border-[#ffd11a]"
                  placeholder="Enter your Message"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-between">
          <FormField
            control={form.control}
            name="checked"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="terms-checkbox-basic"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="accent-[#ffd11a] border border-zinc-400 cursor-pointer"
                    />
                    <Label htmlFor="terms-checkbox-basic">
                      Accept terms and conditions
                    </Label>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            size={"lg"}
            className="bg-[#ffd11a] cursor-pointer text-[#1a1a1a]"
            type="submit"
          >
            {sending ? "Sending..." : "Send"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
