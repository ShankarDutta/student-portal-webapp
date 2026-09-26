"use client";

import { courseList, duration } from "@/lib/infromation";
import { OnlineRegistrationFormSchemaType } from "@/lib/types";
import { onlineRegistrationFormSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { ShieldCheckIcon } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../shadcnui/button";
import { Calendar } from "../shadcnui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "../shadcnui/card";
import { Checkbox } from "../shadcnui/checkbox";
import { Field, FieldError, FieldLabel } from "../shadcnui/field";
import { Input } from "../shadcnui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../shadcnui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../shadcnui/select";
import { Spinner } from "../shadcnui/spinner";
import { Textarea } from "../shadcnui/textarea";
import { toast } from "../shadcnui/toast";

const OnlineRegistrationForm = () => {
  const [open, setOpen] = useState(false);

  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting, isSubmitSuccessful },
  } = useForm<OnlineRegistrationFormSchemaType>({
    resolver: zodResolver(onlineRegistrationFormSchema),
    defaultValues: {
      fullName: "",
      fatherName: "",
      gender: "",
      dob: undefined,
      emailId: "",
      phoneNumber: "",
      whatsappNumber: "",
      gurdianNumber: "",
      lastQualification: "",
      address: "",
      course: "",
      acceptTerms: false,
      duration: "",
    },

    mode: "onSubmit",
  });

  const sendAddmissonData = async (sData: OnlineRegistrationFormSchemaType) => {
    await new Promise<void>((r) => setTimeout(r, 1800));
    const admissionData = {
      ...sData,
      dob: format(sData.dob, "dd/MM/yyyy"),
    };

    if (!sData.acceptTerms) {
      return toast.add({
        type: "error",
        description: "Please Select Terms & Conditions",
      });
    }

    if (!admissionData) {
      toast.add({
        type: "error",
        description: "Somethin went wrong! please try again",
      });
    } else {
      toast.add({
        type: "success",
        description: "Registration Succefully Completed",
      });
      console.log(admissionData);

      reset();
    }

    console.log(admissionData);
  };

  return (
    <Card className="h-auto border-0 bg-white shadow-lg outline-none xl:min-h-200">
      <CardContent className="text-left">
        {isSubmitSuccessful ?
          <div className="space-y-6 text-center">
            <div>
              <h2 className="text-2xl font-bold">
                Registration Submitted Successfully! 🎉
              </h2>

              <p className="text-muted-foreground mt-2">
                Thank you for choosing Mars Academy. Our team will contact you
                within 2 working days.
              </p>
            </div>

            <div className="rounded-xl border p-4 text-left">
              <p className="text-muted-foreground text-sm">Phone Number</p>
              <p className="font-medium">8017564029</p>

              <p className="text-muted-foreground mt-4 text-sm">
                WhatsApp Number
              </p>
              <p className="font-medium">7003398110</p>
            </div>

            <p className="text-muted-foreground text-sm">
              Please keep these numbers active for verification.
            </p>
          </div>
        : <form
            onSubmit={handleSubmit(sendAddmissonData)}
            className="space-y-5"
            noValidate>
            {/* basic details section  */}
            <div className="space-y-3">
              <CardTitle className="text-xl">Basic Details</CardTitle>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Controller
                  name="fullName"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>Full Name</FieldLabel>
                      <Input
                        type="text"
                        {...field}
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                        placeholder="Name"
                        className="h-12"
                        autoComplete="name"
                      />

                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="fatherName"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>
                        Father&apos;s Name
                      </FieldLabel>
                      <Input
                        type="text"
                        {...field}
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                        placeholder="Father's Name"
                        autoComplete="off"
                        className="h-12"
                      />

                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="gender"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>Gender</FieldLabel>
                      <Select
                        name={field.name}
                        value={field.value}
                        onValueChange={field.onChange}>
                        <SelectTrigger
                          id={field.name}
                          aria-invalid={fieldState.invalid}
                          className="min-w-30 py-5.5 capitalize">
                          <SelectValue placeholder="Select your gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="others">Others</SelectItem>
                        </SelectContent>
                      </Select>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="dob"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>
                        Date Of Birth
                      </FieldLabel>

                      <Popover
                        open={open}
                        onOpenChange={setOpen}>
                        <PopoverTrigger
                          className={`${field.value ? "text-black hover:text-black" : "hover:text-muted-foreground"} bg-transparent hover:bg-transparent`}

                          render={
                            <Button
                              id={field.name}
                              type="button"
                              variant="outline"
                              className="text-muted-foreground h-12 w-full justify-start font-normal"
                              aria-invalid={fieldState.invalid}>
                              {field.value ?
                                format(field.value, "dd/MM/yyyy")
                              : "Dob"}
                            </Button>
                          }
                        />

                        <PopoverContent
                          className="w-auto p-0"
                          align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={(date) => {
                              field.onChange(date);
                              setOpen(false);
                            }}
                            disabled={(date) => date > new Date()}
                            captionLayout="dropdown"
                            autoFocus
                          />
                        </PopoverContent>
                      </Popover>

                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="emailId"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>
                        Email Address
                      </FieldLabel>
                      <Input
                        type="email"
                        {...field}
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                        placeholder="Email Address"
                        autoComplete="email"
                        className="h-12"
                      />

                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="phoneNumber"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>
                        Contact Number
                      </FieldLabel>
                      <Input
                        type="tel"
                        {...field}
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                        placeholder="Contact number"
                        autoComplete="tel"
                        className="h-12"
                      />

                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="whatsappNumber"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>
                        What&apos;s App Number
                      </FieldLabel>
                      <Input
                        type="tel"
                        {...field}
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                        placeholder="Whats App number"
                        autoComplete="tel"
                        className="h-12"
                      />

                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="gurdianNumber"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>
                        Gurdian Number
                      </FieldLabel>
                      <Input
                        type="tel"
                        {...field}
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                        placeholder="Gurdian number"
                        autoComplete="tel"
                        className="h-12"
                      />

                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="lastQualification"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>
                        Last Qualification
                      </FieldLabel>
                      <Input
                        type="text"
                        {...field}
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                        placeholder="Qualification"
                        autoComplete="off"
                        className="h-12"
                      />

                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="address"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field
                      data-invalid={fieldState.invalid}
                      className="md:col-span-2 lg:col-span-3">
                      <FieldLabel htmlFor={field.name}>Address</FieldLabel>
                      <Textarea
                        {...field}
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                        placeholder="Address"
                        autoComplete="street-address"
                        className="h-32"
                      />

                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </div>
            </div>

            {/* select course section  */}
            <div className="space-y-2 pb-2">
              <CardTitle className="text-xl">Course Deatils</CardTitle>
              <div className="grid grid-cols-2 gap-4">
                <Controller
                  name="course"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>Course</FieldLabel>
                      <Select
                        name={field.name}
                        value={field.value}
                        onValueChange={field.onChange}>
                        <SelectTrigger
                          id={field.name}
                          aria-invalid={fieldState.invalid}
                          className="min-w-30 py-5.5 capitalize">
                          <SelectValue placeholder="Select your course " />
                        </SelectTrigger>
                        <SelectContent>
                          {courseList.map((item) => (
                            <SelectItem
                              key={item.id}
                              value={item.subject}
                              className="capitalize">
                              {item.subject}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="duration"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>Duration</FieldLabel>
                      <Select
                        name={field.name}
                        value={field.value}
                        onValueChange={field.onChange}>
                        <SelectTrigger
                          id={field.name}
                          aria-invalid={fieldState.invalid}
                          className="min-w-30 py-5.5 capitalize">
                          <SelectValue placeholder="Select your course duration" />
                        </SelectTrigger>
                        <SelectContent>
                          {duration.map((item) => (
                            <SelectItem
                              key={item.id}
                              value={item.value}
                              className="capitalize">
                              {item.value}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </div>
            </div>

            <Controller
              name="acceptTerms"
              control={control}
              render={({ field, fieldState }) => (
                <Field
                  data-invalid={fieldState.invalid}
                  orientation="horizontal"
                  className="flex items-start justify-start space-x-1">
                  <Checkbox
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    checked={field.value}
                    onCheckedChange={(checked) => {
                      field.onChange(checked);
                    }}
                  />
                  <FieldLabel htmlFor={field.name}>
                    I confirm that the information provided is accurate and
                    agree to follow all Mars Academy rules and policies.
                  </FieldLabel>
                </Field>
              )}
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="h-12 w-full">
              {isSubmitting ?
                <Spinner />
              : "Regsiter"}
            </Button>
          </form>
        }
        {!isSubmitSuccessful && (
          <CardDescription className="flex items-center justify-center gap-2 lg:hidden xl:flex">
            <ShieldCheckIcon />
            Your information is secure and protected.
          </CardDescription>
        )}
      </CardContent>
    </Card>
  );
};

export default OnlineRegistrationForm;
