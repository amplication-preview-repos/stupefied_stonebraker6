/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
  IsDate,
  IsNumber,
  Min,
  Max,
  IsInt,
  IsEnum,
} from "class-validator";

import { AgentAssignments } from "../../agentAssignments/base/AgentAssignments";
import { Type } from "class-transformer";
import { EnumPropertiesStatus } from "./EnumPropertiesStatus";
import { EnumPropertiesTypeField } from "./EnumPropertiesTypeField";

@ObjectType()
class Properties {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address!: string | null;

  @ApiProperty({
    required: false,
    type: () => [AgentAssignments],
  })
  @ValidateNested()
  @Type(() => AgentAssignments)
  @IsOptional()
  agentAssignmentsItems?: Array<AgentAssignments>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price!: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  size!: number | null;

  @ApiProperty({
    required: false,
    enum: EnumPropertiesStatus,
  })
  @IsEnum(EnumPropertiesStatus)
  @IsOptional()
  @Field(() => EnumPropertiesStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    enum: EnumPropertiesTypeField,
  })
  @IsEnum(EnumPropertiesTypeField)
  @IsOptional()
  @Field(() => EnumPropertiesTypeField, {
    nullable: true,
  })
  typeField?: "Option1" | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Properties as Properties };