import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useCallback, useEffect, useRef, useState } from "react";

export default function HomePage() {
  const [lineData, setLineData] = useState([
    <Typography className="code">Welcome To HPBD-KDJ v1.0</Typography>,
    <Typography className="code">이 시스템은 KDJ의 생일을</Typography>,
    <Typography className="code">축하하기 위해 만들어졌습니다</Typography>,
    <Typography className="code" />,
    <Typography className="code">help를 입력해 도움을 얻으세요</Typography>,
  ]);

  const [choices, setChoices] = useState(["help"]);
  const [newText, setNewText] = useState("");

  const codeContentRef = useRef();

  const newLineWriter = useCallback((content) => {
    if (content?.length > 0) {
      if (content === "clear") {
        setLineData([]);
      } else if (content === "help") {
        setChoices(["help", "login", "get_cele", "clear"]);
        setLineData((prev) => [
          ...prev,
          <Typography className="code">
            help 사용 가능한 명령어 보기
          </Typography>,
          <Typography className="code">login 로그인하기</Typography>,
          <Typography className="code">get_cele 축하받기</Typography>,
          <Typography className="code">clear 명령 창 지우기</Typography>,
          <Typography className="code" />,
        ]);
      } else {
        setLineData((prev) => [
          ...prev,
          <Typography className="code">{content} is not defined</Typography>,
          <Typography className="code" />,
        ]);
      }
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setNewText("");
    }, 200);
    setTimeout(() => {
      newLineWriter(newText);
    }, 200);
  }, [newLineWriter, newText]);

  const scrollToBottom = () => {
    codeContentRef.current?.scrollTo({
      top: codeContentRef.current.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [lineData]);

  return (
    <Box id="wrapper" className="centeralize">
      <Box id="centerbox">
        <Box className="codebox">
          <Box className="header">
            <Box className="buttons">
              <Box className="button red"></Box>
              <Box className="button yellow"></Box>
              <Box className="button green"></Box>
            </Box>
            <Box className="title">
              <Typography>Running: HPBD KDJ</Typography>
            </Box>
          </Box>
          <Box id="codeContent" ref={codeContentRef}>
            {lineData}
            <Box id="cursor">
              $ {newText}
              <Box id="cursorBox" />
            </Box>
          </Box>
          <Box id="selectors">
            {choices?.map((choice) => (
              <Button
                className="choice"
                onClick={() => {
                  //   newLineWriter(choice);
                  setNewText(choice);
                }}
              >
                <Typography>{choice}</Typography>
              </Button>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
