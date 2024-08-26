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
import { ClientsWhereUniqueInput } from "../../clients/base/ClientsWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AppointmentsUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ClientsWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ClientsWhereUniqueInput)
  @IsOptional()
  @Field(() => ClientsWhereUniqueInput, {
    nullable: true,
  })
  client?: ClientsWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  date?: Date | null;

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
  notes?: string | null;
}

export { AppointmentsUpdateInput as AppointmentsUpdateInput };
