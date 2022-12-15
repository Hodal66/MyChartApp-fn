import React from "react";
import { useState } from "react";
import {
  Box,
  IconButton,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
  InputBase,
} from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import MessageIcon from "@mui/icons-material/Message";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "../../state";
import { useNavigate } from "react-router-dom";
// import user from "../../state"
import FlexBetween from "../../components/FlexBetween";

function NavBar() {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const users = useSelector((state) => state.user);
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;
  const primary = theme.palette.primary.light;

  // const fullName = `${user.firstName} ${user.lastName}`;
  const fullName = "Muheto Hodal";

  return (
    <FlexBetween padding="1rem 6%" backgroundColor={alt}>
      <FlexBetween gap="1.75">
        <Typography
          fontWeight="bold"
          fontStyle="clamp(1rem, 3rem, 2.25rem)"
          fontSize="2rem"
          paddingRight="1rem"
          color={primary}
          onClick={() => navigate("/home")}
          sx={{
            "&:hover": {
              color: primaryLight,
              cursor: "pointer",
            },
          }}
        >
          Sociopedia
        </Typography>
        {isMobileMenuToggled && (
          <FlexBetween
            backgroundColor={neutralLight}
            borderRadius="9px"
            gap="3rem"
            padding="0.1em 1.5em"
          >
            <InputBase placeholder="Search..." />
            <IconButton>
              <SearchIcon />
            </IconButton>
          </FlexBetween>
        )}
      </FlexBetween>
      {/** DESKTOP NAV */}
      {isNonMobileScreens ? (
        <FlexBetween gap="2rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkModeIcon sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeIcon sx={{ color: dark, fontSize: "25px" }} />
            )}
          </IconButton>
          <MessageIcon sx={{ fontSize: "25px" }} />
          <CircleNotificationsIcon sx={{ fontSize: "25px" }} />
          <HelpIcon sx={{ fontSize: "25px" }} />
          <FormControl variant="standard" value={fullName}>
            <Select
              value={fullName}
              sx={{
                backgroundColor: neutralLight,
                width: "150px",
                borderRadius: "0.25rem",
                p: "0.25rem 1rem",
                "& .MuiSvgIcon-root": {
                  pr: "0.25rem",
                  width: "3rem",
                },
                "& .MuiSelect-select:focus": {
                  backgroundColor: neutralLight,
                },
              }}
              input={<InputBase />}
            >
              <MenuItem value={fullName}>
                <Typography>{fullName}</Typography>
              </MenuItem>
              <MenuItem onClick={() => dispatch(setLogout())}>Log Out</MenuItem>
            </Select>
          </FormControl>
        </FlexBetween>
      ) : (
        <IconButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        >
          {isMobileMenuToggled ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      )}
      {/**MOBILE NAV */}
      {isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100px"
          zIndex="10"
          maxWidth="500px"
          minWidth="300px"
          backgroundColor={background}
        >
          {/**Close Icon */}
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          {/**MENU ITEM */}
          <FlexBetween
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="2rem"
          >
            <IconButton onClick={() => dispatch(setMode())}>
              {theme.palette.mode === "dark" ? (
                <DarkModeIcon sx={{ fontSize: "25px" }} />
              ) : (
                <LightModeIcon sx={{ color: dark, fontSize: "25px" }} />
              )}
            </IconButton>
            <MessageIcon sx={{ fontSize: "25px" }} />
            <CircleNotificationsIcon sx={{ fontSize: "25px" }} />
            <HelpIcon sx={{ fontSize: "25px" }} />
            <FormControl variant="standard" value={fullName}>
              <Select
                value={fullName}
                sx={{
                  backgroundColor: neutralLight,
                  width: "150px",
                  borderRadius: "0.25rem",
                  p: "0.25rem 1rem",
                  "& .MuiSvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem",
                  },
                  "& .MuiSelect-select:focus": {
                    backgroundColor: neutralLight,
                  },
                }}
                input={<InputBase />}
              >
                <MenuItem value={fullName}>
                  <Typography>{fullName}</Typography>
                </MenuItem>
                <MenuItem onClick={() => dispatch(setLogout())}>
                  Log Out
                </MenuItem>
              </Select>
            </FormControl>
          </FlexBetween>
        </Box>
      )}
    </FlexBetween>
  );
}

export default NavBar;
