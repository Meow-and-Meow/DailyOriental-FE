import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-end;
`;

export const Alarm = styled.div`
  width: 80px;
  height: 80px;
  border-radius: ${(props) => (props.$isVisible ? "0" : "0 0 0 30px")};
  background-color: #28272a;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 20px;
    padding-left: 1px;
  }
`;

export const DropdownContainer = styled.div`
  z-index: 2500;
  position: absolute;
  text-align: center;
  justify-content: ${(props) => (props.$hasDropdownItems ? "flex-start" : "center")};
  align-items: ${(props) => (props.$hasDropdownItems ? "flex-start" : "center")};
  gap: 15px;

  width: calc(203px - 4px);
  min-height: 45.2px;
  border-radius: 20px 0px 0px 20px;
  border: 2px solid #28272a;

  top: 80px;
  right: 0;
  padding: 18px 0;
  display: ${(props) => (props.$isVisible ? "flex" : "none")};
  flex-direction: column;
  background-color: #28272a;

  @media (hover: hover) and (pointer: fine) {
    right: calc(50vw - 180px);
  }
`;

export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: none;
  top: 0;
  left: 0;
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NoAlarm = styled.div`
  font-size: 12px;
  font-weight: 600;
  line-height: 14.32px;
  text-align: center;
  color: #f5f5f580;
`;
