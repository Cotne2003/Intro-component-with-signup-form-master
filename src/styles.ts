import styled from "styled-components";

export const StyledMain = styled.main`
  width: 111.1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1139px) {
    width: 101.5rem;
  }
  @media (max-width: 1023px) {
    flex-direction: column;
    text-align: center;
    width: auto;
    margin-top: 8.8rem;
    gap: 6.4rem;
    margin-bottom: 5rem;
  }
`;

export const FirstItem = styled.div`
  width: 52.5rem;
  @media (max-width: 1023px) {
    width: 32.7rem;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 5rem;
  font-weight: 700;
  line-height: 5.5rem;
  letter-spacing: -0.521px;
  @media (max-width: 1023px) {
    font-size: 2.8rem;
    line-height: 3.6rem;
  }
`;

export const Text = styled.p`
  margin-top: 1.1rem;
  color: #fff;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.6rem;
  margin-top: 3rem;
  @media (max-width: 1023px) {
    margin-top: 2rem;
  }
`;

export const SecondItem = styled.div`
  width: 54rem;
  @media (max-width: 1023px) {
    width: 32.7rem;
  }
`;

export const Offer = styled.div`
  width: 100%;
  border-radius: 10px;
  background: #5e54a4;
  box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.15);
  text-align: center;
  padding: 1.7rem 0;
  cursor: pointer;
  @media (max-width: 1023px) {
    padding: 1.8rem 6.6rem;
    text-align: center;
  }
`;

export const OfferText = styled.span`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2.6rem;
  letter-spacing: 0.268px;
  @media (max-width: 1023px) {
  }
`;

export const OfferSpan = styled(OfferText)`
  font-weight: 400;
`;

export const StyledForm = styled.form`
  text-align: right;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.15);
  width: 100%;
  padding: 4rem;
  margin-top: 2.4rem;
  @media (max-width: 1023px) {
    padding: 2.4rem;
  }
`;

export const FirstInput = styled.input`
  border: 1px solid #dedede;
  width: 100%;
  border-radius: 5px;
  color: #3d3b48;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.6rem;
  letter-spacing: 0.25px;
  padding: 1.5rem 3.2rem;
  caret-color: #5e54a4;
  &:focus {
    outline: 1px solid #5e54a4;
  }
  &::placeholder {
    color: #3d3b48;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2.6rem;
    letter-spacing: 0.25px;
    opacity: 0.75;
  }
`;

export const AnotherInputs = styled(FirstInput)`
  margin-top: 0.3rem;
`;

export const SubmitButton = styled.button`
  border-radius: 5px;
  background: #38cc8b;
  box-shadow: 0px -4px 0px 0px rgba(0, 0, 0, 0.09) inset;
  text-align: center;
  padding: 1.5rem 0;
  width: 100%;
  margin-top: 2rem;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 2.6rem;
  letter-spacing: 1px;
  border: none;
  cursor: pointer;
  &:active {
    border-radius: 5px;
    background: #77e2b3;
  }
`;

export const TermsAndServices = styled.span`
  color: #bab7d4;
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 2.6rem;
`;

export const TandSSpan = styled.span`
  color: #ff7979;
  font-weight: 700;
  cursor: pointer;
`;

export const ErrorP = styled.p`
  color: #ff7979;
  font-size: 1.1rem;
  font-style: italic;
  font-weight: 500;
  height: 1.7rem;
  margin-top: 0.6rem;
`;
