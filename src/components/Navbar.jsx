import styled from "styled-components";
import { v } from "../styles/variables"
import { useContext } from "react";
import { NavLink } from "react-router-dom"
import { ThemeContext } from "../Router";



import {
  AiOutlineLeft,
  AiOutlineHome,
  AiOutlineAppstoreAdd,
  AiOutlineFileSearch,
  AiOutlineHeart,
  AiOutlineInbox
} from "react-icons/ai";
import { MdLogout } from "react-icons/md";

export const Navbar = ({ sidebarOpen, setSidebarOpen }) => {
  const ModSidebaropen = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const { setTheme, theme } = useContext(ThemeContext);
  const CambiarTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <Container isopen={sidebarOpen} themeuse={theme}>
      <button className="Sidebarbutton" onClick={ModSidebaropen}>
        <AiOutlineLeft />
      </button>
      <div className="Logocontent">
        <div className="imgcontent">
          <img
            className=" h-6 w-24 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
            alt=""
          />
        </div>
      </div>
      {linksArray.map(({ icon, label, to }) => (
        <div className="LinkContainer" key={label}>
          <NavLink
            to={to}
            className={({ isActive }) => `Links${isActive ? ` active` : ``}`}
          >
            <div className="Linkicon">{icon}</div>
            {sidebarOpen && <span>{label}</span>}
          </NavLink>
        </div>
      ))}
      <Divider />
      {secondarylinksArray.map(({ icon, label, to }) => (
        <div className="LinkContainer" key={label}>
          <NavLink
            to={to}
            className={({ isActive }) => `Links${isActive ? ` active` : ``}`}
          >
            <div className="Linkicon">{icon}</div>
            {sidebarOpen && <span>{label}</span>}
          </NavLink>
        </div>
      ))}
      <div className="Themecontent">
        {sidebarOpen && <span className="titletheme"></span>}
        <div className="Togglecontent">
          <div className="grid theme-container">
            <div className="content">
              <div className="demo">
                <label className="switch" istheme={theme}>
                  <input
                    istheme={theme}
                    type="checkbox"
                    className="theme-swither"
                    onClick={CambiarTheme}
                  ></input>
                  <span istheme={theme} className="slider round"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
const linksArray = [
  {
    label: "Home",
    icon: <AiOutlineHome />,
    to: "/",
  },
  {
    label: "Add Vacant",
    icon: <AiOutlineAppstoreAdd />,
    to: "/add",
  },
  {
    label: "Applications",
    icon: < AiOutlineFileSearch />,
    to: "/applications",
  },
  {
    label: "Favorites",
    icon: <AiOutlineHeart />,
    to: "/favorites",
  },
  {
    label: "Notifications",
    icon: <AiOutlineInbox />,
    to: "/notifications",
  },
];
const secondarylinksArray = [

  {
    label: "LogOut",
    icon: <MdLogout />,
    to: "/null",
  },
];

const Container = styled.div`
 position: -webkit-sticky;
  position: sticky;
  top: 0;
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.bg};
  padding-top: 30px;
  .Sidebarbutton {
    position: absolute;
    top: ${v.xxlSpacing};
    right: -18px;
    width: 34px;
    height: 34px;
    border-radius: 12px;
    background: ${(props) => props.theme.bgtgderecha};
    box-shadow: 0 0 8px ${(props) => props.theme.bg3},
      0 0 7px ${(props) => props.theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.4s;
    transform: ${({ isopen }) => (isopen ? `initial` : `rotate(180deg)`)};
    border: none;
    letter-spacing: inherit;
    color: inherit;
    font-size: 20px;
    text-align: inherit;
    font-family: inherit;
  }
  .Logocontent {
    display: flex;
    justify-content: center;
    align-items: center;
    display: ${({ isopen }) => (isopen ? `flex` : `none`)};


    padding-bottom: ${v.lgSpacing};
    .imgcontent {
      display: flex;
      img {
        max-width: 100%;
        height: auto;
      }
      cursor: pointer;
      transition: all 0.3s;
      transform: ${({ isopen }) => (isopen ? `scale(0.7)` : `scale(1.5)`)};
    }
  
  }
  .LinkContainer {
    margin: 8px 0;
   
    padding: 0 15%;
    :hover {
      background: ${(props) => props.theme.bg3};
    }
    .Links {
      display: flex;
      align-items: center;
      text-decoration: none;
       
      padding: calc(${v.mdSpacing}) 0;
      color: ${(props) => props.theme.text};
      height:50px;
      .Linkicon {
        padding: ${v.smSpacing} ${v.mdSpacing};
        display: flex;

        svg {
          font-size: 25px;
        }
      }
      &.active {
        .Linkicon {
          svg {
            color: ${(props) => props.theme.bg4};
          }
        }
      }
    }
  }
  .Themecontent {
    display: flex;
    align-items: end;
    justify-content: space-between;
    .titletheme {
      display: block;
      font-weight: 700;
      opacity: ${({ isopen }) => (isopen ? `1` : `0`)};
      transition: all 0.3s;
      white-space: nowrap;
      overflow: hidden;
    }
    .Togglecontent {
      margin: ${({ isopen }) => (isopen ? `auto 40px` : `auto 15px`)};
      width: 36px;
      height: 20px;
      border-radius: 10px;
      transition: all 0.3s;
      position: relative;
      .theme-container {
        background-blend-mode: multiply, multiply;
        transition: 0.4s;
        .grid {
          display: grid;
          justify-items: center;
          align-content: center;
          height: 100vh;
          width: 100vw;
          font-family: "Lato", sans-serif;
        }
        .demo {
          font-size: 32px;
          .switch {
            position: relative;
            display: inline-block;
            width: 60px;
            height: 34px;
            .theme-swither {
              opacity: 0;
              width: 0;
              height: 0;
              &:checked + .slider:before {
                left: 4px;
                content: "🌑";
                transform: translateX(26px);
              }
            }
            .slider {
              position: absolute;
              cursor: pointer;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: ${({ themeuse }) =>
    themeuse === "light" ? v.lightcheckbox : v.checkbox};

              transition: 0.4s;
              &::before {
                position: absolute;
                content: "☀️";
                height: 0px;
                width: 0px;
                left: -10px;
                top: 16px;
                line-height: 0px;
                transition: 0.4s;
              }
              &.round {
                border-radius: 34px;

                &::before {
                  border-radius: 50%;
                }
              }
            }
          }
        }
      }
    }
  }
`;
const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme.bg3};
  margin: ${v.lgSpacing} 0;
`;