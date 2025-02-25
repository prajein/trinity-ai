'use client';

import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Mail, Clock, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function EmailAssistant() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Email Assistant</h1>
        <Button variant="default">
          <Mail className="mr-2 h-4 w-4" />
          Compose
        </Button>
      </div>

      <Tabs defaultValue="urgent" className="w-full">
        <TabsList>
          <TabsTrigger value="urgent">
            Urgent
            <Badge variant="destructive" className="ml-2">3</Badge>
          </TabsTrigger>
          <TabsTrigger value="followup">
            Follow-up
            <Badge variant="secondary" className="ml-2">5</Badge>
          </TabsTrigger>
          <TabsTrigger value="low">
            Low Priority
            <Badge variant="outline" className="ml-2">2</Badge>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="urgent" className="mt-4">
          <ScrollArea className="h-[600px]">
            {/* Email Cards */}
            <div className="space-y-4">
              {Array.from({length: 3}).map((_, i) => (
                <Card key={i} className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 text-destructive" />
                        <span className="font-semibold">Urgent: Project Update Required</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        The client is requesting an immediate update on the project status...
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">2h ago</span>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button size="sm" variant="default">
                      Reply Now
                    </Button>
                    <Button size="sm" variant="outline">
                      View Full Thread
                    </Button>
                    <Button size="sm" variant="ghost">
                      <CheckCircle2 className="h-4 w-4" />
                      Mark as Done
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="followup">
          {/* Similar structure for follow-up emails */}
        </TabsContent>

        <TabsContent value="low">
          {/* Similar structure for low priority emails */}
        </TabsContent>
      </Tabs>
    </div>
  );
}