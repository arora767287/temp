/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  IsEnum,
  IsDate,
  ValidateNested,
} from "class-validator";
import { EnumMessageType } from "./EnumMessageType";
import { EnumMessageStatus } from "./EnumMessageStatus";
import { Type } from "class-transformer";
import { EmailUpdateManyWithoutMessagesInput } from "./EmailUpdateManyWithoutMessagesInput";

@InputType()
class MessageUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  campaignId?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  campaignName?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  campaignContactId?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  campaignContactFirstName?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  campaignContactLastName?: string;

  @ApiProperty({
    required: false,
    enum: EnumMessageType,
  })
  @IsEnum(EnumMessageType)
  @IsOptional()
  @Field(() => EnumMessageType, {
    nullable: true,
  })
  type?: "Email" | "SMS" | "WhatsApp" | "Voice";

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  templateId?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  templateName?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  content?: string;

  @ApiProperty({
    required: false,
    enum: EnumMessageStatus,
  })
  @IsEnum(EnumMessageStatus)
  @IsOptional()
  @Field(() => EnumMessageStatus, {
    nullable: true,
  })
  status?: "Pending" | "Sent" | "Delivered" | "Failed";

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  scheduledAt?: Date | null;

  @ApiProperty({
    required: false,
    type: () => EmailUpdateManyWithoutMessagesInput,
  })
  @ValidateNested()
  @Type(() => EmailUpdateManyWithoutMessagesInput)
  @IsOptional()
  @Field(() => EmailUpdateManyWithoutMessagesInput, {
    nullable: true,
  })
  messageEmails?: EmailUpdateManyWithoutMessagesInput;
}

export { MessageUpdateInput as MessageUpdateInput };
