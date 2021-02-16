import React from 'react';
import {projectsList} from './data';
import {
  Decription,
  DescWrap,
  Detail,
  DevTools,
  Heading,
  ImgD,
  ImgM,
  Mark,
  ProjectCont,
  ProjectImg,
  PWrap,
  Topline,
} from './ProjectsStyle';

const Projects = () => {



  return (
    <>
      {projectsList.map((data, key) => {
        return (
          <PWrap>
          <ProjectCont key={key} href={data.git}> 
            <ProjectImg>
              <ImgD src={data.imgDesktop} alt={data.alt} />
              <ImgM src={data.imgMobile} alt={data.alt} />
            </ProjectImg>
            <Detail>
              {data.dev === 'true' ? (
                <Mark style={{background: 'green'}}>Working</Mark>
              ) : (
                <Mark style={{background: 'orangeRed'}}>Developing</Mark>
              )}
              <Topline>{data.topLine}</Topline>
              <Heading>{data.headLine}</Heading>
              <DescWrap>
                <Decription>{data.description}</Decription>
                <DevTools>
                  Tools:
                  <p>{data.languages}</p>
                </DevTools>
              </DescWrap>
            </Detail>
          </ProjectCont></PWrap>
        );
      })}
    </>
  );
};

export default Projects;
