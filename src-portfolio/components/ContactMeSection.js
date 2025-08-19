import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  useEffect(() => {
    if (response) onOpen(response.type, response.message);
  }, [response, onOpen]);

  // a) Formik config: initialValues, onSubmit, validationSchema
  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "hireMe",
      comment: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      type: Yup.string().oneOf(["hireMe", "openSource", "other"]).notRequired(),
      comment: Yup.string()
        .min(25, "Must be at least 25 characters")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      // Pass full form values so API can personalize the message with firstName
      await submit("url",values);
      // Reset happens in useEffect after we confirm success
    },
  });

  // Helpers for error display
  const isInvalid = (field) => formik.touched[field] && !!formik.errors[field];

    // e) React to API response, show alert, reset on success
  useEffect(() => {
    if (!response) return;
    onOpen(response.type, response.message);
    if (response.type === "success") {
      formik.resetForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response, onOpen, formik]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          {/* d) Connect submit to Formik handler (prevents default automatically) */}
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              {/* b,c) Controlled input + error state/messages */}
              <FormControl isInvalid={isInvalid("firstName")}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input id="firstName" {...formik.getFieldProps("firstName")} />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={isInvalid("email")}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" {...formik.getFieldProps("type")} sx={{ option: { backgroundColor : "#5e439dff" } }}>
                  <option value="hireMe" color="black">Freelance project proposal</option>
                  <option value="openSource" color="black">
                    Open source consultancy session
                  </option>
                  <option value="other" color="black">Other</option>
                </Select>
              </FormControl>

              <FormControl isInvalid={isInvalid("comment")}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  placeholder="Write your message..."
                  height={250}
                  {...formik.getFieldProps("comment")}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>

              <Button
                type="submit"
                colorScheme="purple"
                width="full"
                isLoading={isLoading}
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
