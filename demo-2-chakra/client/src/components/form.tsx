import React, { useState } from "react";
import {
  Center,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Checkbox,
} from "@chakra-ui/react";
import axios from "axios";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  isSubscribed: boolean;
  password: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    isSubscribed: false,
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { firstName, lastName, email, isSubscribed, password } = formData;
    await axios.post("http://localhost:4042/contactForm/api/v1/createForm", {
      firstName,
      lastName,
      email,
      subscribed: isSubscribed,
      password,
    });
  };

  return (
    <Center>
      <Box
        maxW="md"
        borderWidth="1px"
        borderRadius="lg"
        p="4"
        m="4"
        boxShadow="md"
      >
        <form onSubmit={handleSubmit}>
          <FormControl id="firstName" mb="4">
            <FormLabel>First Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter your first name"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl id="lastName" mb="4">
            <FormLabel>Last Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter your last name"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl id="email" mb="4">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl id="password" mb="4">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl mb="4" display="flex" alignItems="center">
            <Checkbox
              id="isSubscribed"
              name="isSubscribed"
              isChecked={formData.isSubscribed}
              onChange={handleInputChange}
              size="lg"
            >
              Subscribe to newsletter
            </Checkbox>
          </FormControl>

          <Button colorScheme="teal" type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </Center>
  );
};

export default ContactForm;
