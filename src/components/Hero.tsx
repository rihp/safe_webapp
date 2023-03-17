import React from "react";
import { Box, Typography } from "@mui/material";

function Hero() {
  return (
    <Box sx={{ bgcolor: "primary.main", color: "primary.contrastText", py: 10 }}>
      <Typography variant="h2" align="center" gutterBottom>
        Safe Webapp
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        This is a demo app to showcase the functionality of the Safe wrapper
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Follow along to see a step by step of the creation of a safe and its features
      </Typography>
      <Typography variant="body1" align="justify" sx={{ maxWidth: 800, mx: "auto" }}>
        Polywrap is a software platform that facilitates the creation and distribution of WebAssembly (WASM) modules. WASM enables developers to write code in any language and compile it to a portable binary format that can run on any platform, including web browsers, mobile devices, and servers. Polywrap provides a secure and efficient way to run code on multiple platforms, as well as a way to easily port existing code to WASM. It also provides a number of features that make it easier to develop and debug applications, such as a virtual machine, a debugger, and a compiler. Additionally, Polywrap provides a number of tools to help developers create and deploy applications quickly and easily. These tools include a package manager, a build system, and a deployment system. With Polywrap, developers can create applications that are secure, efficient, and easy to deploy.
      </Typography>
    </Box>
  );
}

export default Hero;
