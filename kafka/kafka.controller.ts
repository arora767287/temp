import {
  Ctx,
  EventPattern,
  KafkaContext,
  Payload,
} from "@nestjs/microservices";
import { Controller } from "@nestjs/common";

@Controller("kafka-controller")
export class KafkaController {
  @EventPattern("userUpdate.v1")
  async onUserUpdateV1(
    @Payload()
    value: string | Record<string, any> | null,
    @Ctx()
    context: KafkaContext
  ): Promise<void> {
    const message = context.getMessage();
  }

  @EventPattern("campaignUpdate.v1")
  async onCampaignUpdateV1(
    @Payload()
    value: string | Record<string, any> | null,
    @Ctx()
    context: KafkaContext
  ): Promise<void> {
    const message = context.getMessage();
  }

  @EventPattern("organizationUpdate.v1")
  async onOrganizationUpdateV1(
    @Payload()
    value: string | Record<string, any> | null,
    @Ctx()
    context: KafkaContext
  ): Promise<void> {
    const message = context.getMessage();
  }

  @EventPattern("templateUpdate.v1")
  async onTemplateUpdateV1(
    @Payload()
    value: string | Record<string, any> | null,
    @Ctx()
    context: KafkaContext
  ): Promise<void> {
    const message = context.getMessage();
  }

  @EventPattern("campaignContactUpdate.v1")
  async onCampaignContactUpdateV1(
    @Payload()
    value: string | Record<string, any> | null,
    @Ctx()
    context: KafkaContext
  ): Promise<void> {
    const message = context.getMessage();
  }

  @EventPattern("emailTemplateResponse.v1")
  async onEmailTemplateResponseV1(
    @Payload()
    value: string | Record<string, any> | null,
    @Ctx()
    context: KafkaContext
  ): Promise<void> {
    const message = context.getMessage();
  }
}
