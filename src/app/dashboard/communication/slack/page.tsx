'use client';

import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageSquare, Clock, Hash, CheckCircle2, Search, ListTodo } from 'lucide-react';

export default function SlackAssistant() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Slack Assistant</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Search className="mr-2 h-4 w-4" />
            Search Messages
          </Button>
          <Button variant="default">
            <MessageSquare className="mr-2 h-4 w-4" />
            New Thread
          </Button>
        </div>
      </div>

      <Tabs defaultValue="channels" className="w-full">
        <TabsList>
          <TabsTrigger value="channels">
            Channel Digests
            <Badge variant="secondary" className="ml-2">5</Badge>
          </TabsTrigger>
          <TabsTrigger value="mentions">
            Mentions
            <Badge variant="destructive" className="ml-2">3</Badge>
          </TabsTrigger>
          <TabsTrigger value="tasks">
            Tasks
            <Badge variant="outline" className="ml-2">4</Badge>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="channels" className="mt-4">
          <ScrollArea className="h-[600px]">
            <div className="space-y-4">
              {Array.from({length: 5}).map((_, i) => (
                <Card key={i} className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2">
                        <Hash className="h-4 w-4 text-primary" />
                        <span className="font-semibold">project-updates</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        New feature discussion and sprint planning updates...
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">1h ago</span>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button size="sm" variant="default">
                      View Thread
                    </Button>
                    <Button size="sm" variant="outline">
                      <ListTodo className="mr-2 h-4 w-4" />
                      Create Task
                    </Button>
                    <Button size="sm" variant="ghost">
                      <CheckCircle2 className="h-4 w-4" />
                      Mark as Read
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="mentions">
          {/* Mentions and direct messages */}
        </TabsContent>

        <TabsContent value="tasks">
          {/* Task management interface */}
        </TabsContent>
      </Tabs>
    </div>
  );
}