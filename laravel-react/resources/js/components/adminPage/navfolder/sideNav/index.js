import React from "react";
import "./navbarStyle.css";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
// import ExpandMore from "@material-ui/icons/ExpandMore";
import PeopleIcon from "@material-ui/icons/People";
import LinkIcon from "@material-ui/icons/Link";
import DescriptionIcon from "@material-ui/icons/Description";
// import ForumIcon from "@material-ui/icons/Forum";
import HomeIcon from "@material-ui/icons/Home";
import LibraryAddCheckIcon from "@material-ui/icons/LibraryAddCheck";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        fontSize: 5,
        backgroundColor: theme.palette.background.paper
    }
}));

export default function SideNav({ url }) {
    // console.log(url);

    const linkClass = "text-dark";

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    เมนู
                </ListSubheader>
            }
            className={classes.root}
        >
            <Link className={linkClass} to={`${url}`}>
                <ListItem button>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText
                        className="d-lg-block d-sm-none"
                        primary="หน้าแรก"
                    />
                </ListItem>
            </Link>
            <Link className={linkClass} to={`${url}/inbox`}>
                <ListItem button>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText
                        className="d-lg-block d-sm-none"
                        primary="ข้อความ"
                    />
                </ListItem>
            </Link>

            <Link className={linkClass} to={`${url}/report`}>
                <ListItem button>
                    <ListItemIcon>
                        <DescriptionIcon />
                    </ListItemIcon>
                    <ListItemText
                        className="d-lg-block d-sm-none"
                        primary="เอกสาร"
                    />
                </ListItem>
            </Link>
            <Link className={linkClass} to={`${url}/user`}>
                <ListItem button>
                    <ListItemIcon>
                        <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText
                        className="d-lg-block d-sm-none"
                        primary="สมาชิก"
                    />
                </ListItem>
            </Link>
            <Link className={linkClass} to={`${url}/news`}>
                <ListItem button>
                    <ListItemIcon>
                        <LinkIcon />
                    </ListItemIcon>
                    <ListItemText
                        className="d-lg-block d-sm-none"
                        primary="ข่าว"
                    />
                </ListItem>
            </Link>
            <Link className={linkClass} to={`${url}/step-report`}>
                <ListItem button>
                    <ListItemIcon>
                        <LibraryAddCheckIcon />
                    </ListItemIcon>
                    <ListItemText
                        className="d-lg-block d-sm-none"
                        primary="ผู้ตรวจ"
                    />
                </ListItem>
            </Link>
        </List>
    );
}
