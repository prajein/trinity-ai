'use client';

import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageSquare, Clock, AlertCircle, CheckCircle2, Users } from 'lucide-react';

export default function WhatsAppAssistant() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">WhatsApp Assistant</h1>
        <Button variant="default">
          <MessageSquare className="mr-2 h-4 w-4" />
          New Chat
        </Button>
      </div>

      <Tabs defaultValue="pending" className="w-full">
        <TabsList>
          <TabsTrigger value="pending">
            Pending Queries
            <Badge variant="destructive" className="ml-2">4</Badge>
          </TabsTrigger>
          <TabsTrigger value="groups">
            Group Chats
            <Badge variant="secondary" className="ml-2">3</Badge>
          </TabsTrigger>
          <TabsTrigger value="automated">
            Auto-Responses
            <Badge variant="outline" className="ml-2">2</Badge>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="mt-4">
          <ScrollArea className="h-[600px]">
            <div className="space-y-4">
              {Array.from({length: 4}).map((_, i) => (
                <Card key={i} className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary" />
                        <span className="font-semibold">Customer Support Query</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        Need assistance with product configuration and setup...
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">30m ago</span>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button size="sm" variant="default">
                      Reply Now
                    </Button>
                    <Button size="sm" variant="outline">
                      View Chat
                    </Button>
                    <Button size="sm" variant="ghost">
                      <CheckCircle2 className="h-4 w-4" />
                      Resolve
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="groups">
          {/* Group chat management interface */}
        </TabsContent>

        <TabsContent value="automated">
          {/* Automated response configuration */}
        </TabsContent>
      </Tabs>
    </div>
  );
}