'use client';

import PageContainer from '@/components/layout/page-container';
import { Heading } from '@/components/ui/heading';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { EmailAssistant } from '@/features/communication/components/email-assistant';
import { WhatsAppAssistant } from '@/features/communication/components/whatsapp-assistant';
import { SlackAssistant } from '@/features/communication/components/slack-assistant';

export default function CommunicationDashboard() {
  return (
    <PageContainer>
      <div className="space-y-4">
        <Heading
          title="Communication Dashboard"
          description="Manage all your communications in one place"
        />
        <Tabs defaultValue="email" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="email">Email</TabsTrigger>
            <TabsTrigger value="whatsapp">WhatsApp</TabsTrigger>
            <TabsTrigger value="slack">Slack</TabsTrigger>
          </TabsList>
          <TabsContent value="email" className="mt-6">
            <EmailAssistant />
          </TabsContent>
          <TabsContent value="whatsapp" className="mt-6">
            <WhatsAppAssistant />
          </TabsContent>
          <TabsContent value="slack" className="mt-6">
            <SlackAssistant />
          </TabsContent>
        </Tabs>
      </div>
    </PageContainer>
  );
}