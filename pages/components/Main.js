import React from "react";
import Head from "next/head";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";

function Main() {
  return (
    <div className="w-full h-screen text-center">
      <Head>
        <title>Jasdeep Ahluwalia - Fullstack Developer</title>
        <meta content="My page title" key="title" />
      </Head>

      <div className="max-w-[750px] w-full h-full m-auto p-2 flex justify-center items-center " id="home">
        <div>
          <div className="flex flex-col gap-3">
            <h1 className="text-5xl">Hi, I'm Jasdeep Ahluwalia</h1>
            <div className="flex gap-1 mx-auto">
              <h1 className="text-3xl font-lobster">But you can call me</h1>
              <h1 className="text-3xl font-lobster light" data-text="Jazz">
                Jazz
              </h1>
            </div>
          </div>
          <div>
            {/* <h2 className="py-3 text-gray-500 uppercase ">
              <span className="inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform">
                Software developer
              </span>
              <span className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-white md:-mb-4 md:h-16 animate-cursor will-change-transform"></span>
            </h2> */}
            {/* <p className="py-4 m-auto tracking-widest text-gray-400 uppercase">
            Learn More About Me!
             
                         </p> */}
            <hr className="py-1 mt-8" />
            <div className="flex items-center justify-between max-w-[330px] m-auto p-2">
              <IconButton
                color="info"
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/jasdeep-ahluwalia/"
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="Github"
                href="https://github.com/ahluwalij"
              >
                <GithubIcon />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="Email"
                href="mailto:jasdeep.a@outlook.com"
              >
                <EmailIcon />
              </IconButton>
              <IconButton
                color="info"
                aria-label="Twitter"
                href="https://twitter.com/JazaScript"
              >
                <TwitterIcon />
              </IconButton>
            </div>
            <Button
              variant="contained"
              className="bg-primary text-white font-serif rounded-full mt-2 max-w-[200px] w-full"
              href="/files/resume"
            >
              Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
