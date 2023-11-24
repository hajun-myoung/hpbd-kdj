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
  const [isLogin, setIsLogin] = useState(false);

  const codeContentRef = useRef();

  const newLineWriter = useCallback(
    (content) => {
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
        } else if (content === "login") {
          setChoices(["eclipse", "M&M's", "스니커즈"]);
          setLineData((prev) => [
            ...prev,
            <Typography className="code">
              선택지 중 KDJ를 가장 잘 표현하는
            </Typography>,
            <Typography className="code">요소를 고르시오</Typography>,
            <Typography className="code" />,
          ]);
        } else if (content === "eclipse") {
          setChoices(["get_cele"]);
          setIsLogin(true);
          setLineData((prev) => [
            ...prev,
            <Typography className="code">인증되었습니다</Typography>,
            <Typography className="code" />,
          ]);
        } else if (content === "M&M's") {
          setChoices(["help", "login", "get_cele", "clear"]);
          setLineData((prev) => [
            ...prev,
            <Typography className="code">{content} 겠냐?</Typography>,
          ]);
          setLineData((prev) => [...prev, <Typography className="code" />]);
        } else if (content === "스니커즈") {
          setChoices(["help", "login", "get_cele", "clear"]);
          setLineData((prev) => [
            ...prev,
            <Typography className="code">{content} 겠냐?</Typography>,
          ]);
          setLineData((prev) => [...prev, <Typography className="code" />]);
        } else if (content === "get_cele") {
          if (isLogin) {
            setChoices(["get_cele", "clear"]);
            setLineData((prev) => [
              ...prev,
              <Typography className="code">생일 축하합니다, 동진!</Typography>,
              <Typography className="code">
                사랑해요 -by.정아세은선아하준
              </Typography>,
              <Typography className="code" />,
            ]);
            setTimeout(() => {
              window.open("https://youtu.be/_JsemaQu-5w", "_blank");
            }, 500);
          } else {
            setChoices(["help", "login", "get_cele", "clear"]);
            setLineData((prev) => [
              ...prev,
              <Typography className="code">
                사용자가 확인되지 않았습니다
              </Typography>,
              <Typography className="code">로그인을 먼저 해주세요</Typography>,
              <Typography className="code" />,
            ]);
          }
        } else {
          setLineData((prev) => [
            ...prev,
            <Typography className="code">{content} is not defined</Typography>,
            <Typography className="code" />,
          ]);
        }
      }
    },
    [isLogin]
  );

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
