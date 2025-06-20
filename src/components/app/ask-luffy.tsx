'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { askLuffy, type AskLuffyOutput } from '@/ai/flows/ask-luffy';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Loader2, User, Bot } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { JollyRogerIcon } from '../icons/jolly-roger';

const formSchema = z.object({
  question: z.string().min(10, {
    message: "C'mon, ask me a real question! Make it longer than 10 characters.",
  }),
});

export default function AskLuffy() {
  const [answer, setAnswer] = useState<AskLuffyOutput | null>(null);
  const [question, setQuestion] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      question: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setAnswer(null);
    setQuestion(values.question);
    
    const result = await askLuffy({ question: values.question });
    setAnswer(result);
    
    setIsLoading(false);
    form.reset();
  }

  return (
    <section id="ask-luffy" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary-foreground bg-primary inline-block px-4 py-2 rounded-lg">Ask Captain Luffy!</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Got a question for the future King of the Pirates? Ask away! I'll answer anything... as long as it's not about where I hid my meat.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline">Your Question</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="question"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="sr-only">Question</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="e.g. What's your favorite food?"
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Thinking about meat...
                      </>
                    ) : (
                      "Send Question to the Grand Line"
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {(isLoading || answer) && (
            <div className="mt-8 space-y-6">
               <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarFallback><User /></AvatarFallback>
                  </Avatar>
                  <div className="bg-card p-4 rounded-lg rounded-tl-none flex-1">
                      <p className="font-bold">You</p>
                      <p className="text-muted-foreground">{question}</p>
                  </div>
                </div>

              {isLoading && (
                 <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarFallback>
                      <JollyRogerIcon className="h-6 w-6" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="bg-primary/10 p-4 rounded-lg rounded-tl-none flex-1 flex items-center gap-2">
                     <Loader2 className="h-4 w-4 animate-spin text-primary" />
                     <p className="text-primary italic">Luffy is thinking...</p>
                  </div>
                </div>
              )}

              {answer && (
                 <div className="flex items-start gap-4">
                   <Avatar>
                    <AvatarFallback>
                      <JollyRogerIcon className="h-6 w-6" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="bg-primary/10 p-4 rounded-lg rounded-tl-none flex-1">
                      <p className="font-bold text-primary font-headline">Monkey D. Luffy</p>
                      <p className="text-primary-foreground/90 whitespace-pre-wrap">{answer.answer}</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
