import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useState } from "react";

export default function HomePage() {
  const [terminalLineData, setTerminalLineData] = useState([
    // <TerminalOutput>Welcome To HPBD-KDJ v1.0</TerminalOutput>,
    // <TerminalOutput>이 시스템은 KDJ의 생일을</TerminalOutput>,
    // <TerminalOutput>축하하기 위해 만들어졌습니다</TerminalOutput>,
    // <TerminalOutput></TerminalOutput>,
    // <TerminalOutput>help를 입력해 도움을 얻으세요</TerminalOutput>,
  ]);

  return (
    <Box id="wrapper" className="centeralize">
      <Box id="centerbox">
        {/* <Terminal
          //   name="HPBD KDJ"
          colorMode={ColorMode.Dark}
          height={300}
          onInput={(terminalInput) => {
            if (terminalInput === "clear") {
              setTerminalLineData([]);
            } else if (terminalInput === "help") {
              setTerminalLineData((prev) => [
                ...prev,
                <TerminalOutput>
                  {"> "}
                  {terminalInput}
                </TerminalOutput>,
                <TerminalOutput>help | 도움말보기</TerminalOutput>,
                <TerminalOutput>clear | 화면 지우기</TerminalOutput>,
                <TerminalOutput>login | 로그인하기</TerminalOutput>,
                <TerminalOutput>get_cele | 축하받기</TerminalOutput>,
                <TerminalOutput />,
              ]);
            } else {
              setTerminalLineData((prev) => [
                ...prev,
                <TerminalOutput>Uncaught ReferenceError:</TerminalOutput>,
                <TerminalOutput>{terminalInput} is not defined</TerminalOutput>,
                <TerminalOutput />,
              ]);
            }
          }}
        >
          {terminalLineData}
        </Terminal> */}
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
        </Box>
      </Box>
    </Box>
  );
}
