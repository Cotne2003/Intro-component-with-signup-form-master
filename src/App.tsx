import { useForm } from "react-hook-form";
import {
  StyledMain,
  FirstItem,
  Title,
  Text,
  SecondItem,
  Offer,
  OfferText,
  OfferSpan,
  StyledForm,
  FirstInput,
  AnotherInputs,
  SubmitButton,
  TermsAndServices,
  TandSSpan,
  ErrorP,
} from "./styles";

type DataType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataType>();

  const onSubmit = () => {};

  return (
    <StyledMain>
      <FirstItem>
        <Title>Learn to code by watching others</Title>
        <Text>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </Text>
      </FirstItem>
      <SecondItem>
        <Offer>
          <OfferText>
            Try it free 7 days <OfferSpan>then $20/mo. thereafter</OfferSpan>
          </OfferText>
        </Offer>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <FirstInput
            type="text"
            placeholder="First Name"
            {...register("firstName", {
              required: { value: true, message: "First Name cannot be empty" },
            })}
            style={
              errors.firstName?.message ? { outline: "2px solid #FF7979" } : {}
            }
          />
          <ErrorP>{errors.firstName?.message}</ErrorP>
          <AnotherInputs
            type="text"
            placeholder="Last Name"
            {...register("lastName", {
              required: { value: true, message: "Last Name cannot be empty" },
            })}
            style={
              errors.lastName?.message ? { outline: "2px solid #FF7979" } : {}
            }
          />
          <ErrorP>{errors.lastName?.message}</ErrorP>
          <AnotherInputs
            type="email"
            placeholder="Email Address"
            {...register("email", {
              required: { value: true, message: "Email cannot be empty" },
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Looks like this is not an email",
              },
            })}
            style={
              errors.email?.message ? { outline: "2px solid #FF7979" } : {}
            }
          />
          <ErrorP>{errors.email?.message}</ErrorP>
          <AnotherInputs
            type="password"
            placeholder="Password"
            {...register("password", {
              required: { value: true, message: "Password cannot be empty" },
            })}
            style={
              errors.password?.message ? { outline: "2px solid #FF7979" } : {}
            }
          />
          <ErrorP>{errors.password?.message}</ErrorP>
          <SubmitButton type="submit">CLAIM YOUR FREE TRIAL</SubmitButton>
          <div style={{ marginTop: "0.8rem", textAlign: "center" }}>
            <TermsAndServices>
              By clicking the button, you are agreeing to our{" "}
              <TandSSpan>Terms and Services</TandSSpan>
            </TermsAndServices>
          </div>
        </StyledForm>
      </SecondItem>
    </StyledMain>
  );
}

export default App;
