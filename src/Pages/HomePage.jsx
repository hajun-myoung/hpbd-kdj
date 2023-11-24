import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useState } from "react";

export default function HomePage() {
  const [lineData, setLineData] = useState([
    <Typography>Welcome To HPBD-KDJ v1.0</Typography>,
    <Typography>이 시스템은 KDJ의 생일을</Typography>,
    <Typography>축하하기 위해 만들어졌습니다</Typography>,
    <Typography />,
    <Typography>help를 입력해 도움을 얻으세요</Typography>,
  ]);

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
          <Box id="codeContent">{lineData}</Box>
        </Box>
      </Box>
    </Box>
  );
}
