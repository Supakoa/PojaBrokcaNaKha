import React from "react";
import "./navbarStyle.css";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import PeopleIcon from "@material-ui/icons/People";
import LinkIcon from "@material-ui/icons/Link";
import DescriptionIcon from "@material-ui/icons/Description";
import ForumIcon from "@material-ui/icons/Forum";
import HomeIcon from "@material-ui/icons/Home";
import LibraryAddCheckIcon from "@material-ui/icons/LibraryAddCheck";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper
    },
    nested: {
        paddingLeft: theme.spacing(4)
    }
}));

export default function Left(props) {
    const url = props.path;
    console.log(url);

    const linkClass = "text-dark";

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

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
                    <ListItemText primary="หน้าแรก" />
                </ListItem>
            </Link>
            {/*<Link className={linkClass} to={routPath[1]}>*/}
            <ListItem button onClick={handleClick} href={`${url}/message`}>
                <ListItemIcon>
                    <ForumIcon />
                </ListItemIcon>
                <ListItemText primary="ข้อความ" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto">
                <List component="div" disablePadding>
                    <Link className={linkClass} to={`${url}/message-inbox`}>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Inbox" />
                        </ListItem>
                    </Link>
                    <Link className={linkClass} to={`${url}/message-outbox`}>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <SendIcon />
                            </ListItemIcon>
                            <ListItemText primary="Outbox" />
                        </ListItem>
                    </Link>
                </List>
            </Collapse>
            {/*</Link>*/}
            <Link className={linkClass} to={`${url}/report`}>
                <ListItem button>
                    <ListItemIcon>
                        <DescriptionIcon />
                    </ListItemIcon>
                    <ListItemText primary="เอกสาร" />
                </ListItem>
            </Link>
            <Link className={linkClass} to={`${url}/user`}>
                <ListItem button>
                    <ListItemIcon>
                        <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="สมาชิก" />
                </ListItem>
            </Link>
            <Link className={linkClass} to={`${url}/news`}>
                <ListItem button>
                    <ListItemIcon>
                        <LinkIcon />
                    </ListItemIcon>
                    <ListItemText primary="ข่าว" />
                </ListItem>
            </Link>
            <Link className={linkClass} to={`${url}/stepReport`}>
                <ListItem button>
                    <ListItemIcon>
                        <LibraryAddCheckIcon />
                    </ListItemIcon>
                    <ListItemText primary="ขั้นตอนเอกสาร" />
                </ListItem>
            </Link>
        </List>
    );
}
