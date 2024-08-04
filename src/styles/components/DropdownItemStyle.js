import styled from "styled-components";

export const DropdownItem = styled.div`
  width: calc(100% - 34px);
  padding: 0 17px;
  color: #448bdb;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3px;
  align-items: flex-start;
`;

export const DropTitle = styled.div`
  font-size: 12px;
  font-weight: 600;
  line-height: 14.32px;
  color: #f5f5f5;
`;

export const DropLink = styled.div`
  font-size: 10px;
  font-weight: 600;
  line-height: 11.93px;
  color: #f7db8d;
`;

export const Line = styled.div`
  width: 140px;
  height: 1px;
  background-color: #f5f5f5cc;
`;
