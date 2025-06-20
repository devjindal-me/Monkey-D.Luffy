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
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, User } from 'lucide-react';
import { Avatar, AvatarFallback } from '../ui/avatar';
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
    <section id="ask-luffy" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold font-headline text-primary">Ask Captain Luffy!</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Got a question for the future King of the Pirates? Ask away! I'll answer anything... as long as it's not about where I hid my meat.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="shadow-lg bg-card/80 border-primary/20">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary/90">Your Question</CardTitle>
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
                            className="resize-none bg-background/50"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isLoading} className="w-full text-lg">
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
                    <AvatarFallback className="bg-secondary"><User /></AvatarFallback>
                  </Avatar>
                  <div className="bg-card/90 p-4 rounded-lg rounded-tl-none flex-1 border border-border">
                      <p className="font-bold">You</p>
                      <p className="text-muted-foreground">{question}</p>
                  </div>
                </div>

              {isLoading && (
                 <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-primary/20 border border-primary/30">
                      <JollyRogerIcon className="h-6 w-6 text-primary" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="bg-primary/20 border border-primary/30 p-4 rounded-lg rounded-tl-none flex-1 flex items-center gap-2">
                     <Loader2 className="h-4 w-4 animate-spin text-primary" />
                     <p className="text-primary/90 italic">Luffy is thinking...</p>
                  </div>
                </div>
              )}

              {answer && (
                 <div className="flex items-start gap-4">
                   <Avatar>
                    <AvatarFallback className="bg-primary/20 border border-primary/30">
                      <JollyRogerIcon className="h-6 w-6 text-primary" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="bg-primary/20 border border-primary/30 p-4 rounded-lg rounded-tl-none flex-1">
                      <p className="font-bold text-primary font-headline text-xl">Monkey D. Luffy</p>
                      <p className="text-foreground/90 whitespace-pre-wrap">{answer.answer}</p>
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
