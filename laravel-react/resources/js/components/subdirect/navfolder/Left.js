import React from 'react';
import './navbarStyle.css';
import {Link} from 'react-router-dom';
import {ListGroup} from "react-bootstrap";
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

export default function Left(){
    const routPath = ['/', '/message', '/report', '/user', '/news', '/stepreport' ]
    const linkClass = "text-dark list-group-item list-group-item-secondary list-group-item-action";

    return(
        <ListGroup variant="flush" className="bg-menu">

            <Link className={linkClass} to={routPath[0]} >
                หน้าแรก
            </Link>
            <Link className={linkClass} to={routPath[1]} >
                ข้อความ
            </Link>
            <Link className={linkClass} to={routPath[2]} >
                เอกสาร
            </Link>
            <Link className={linkClass} to={routPath[3]} >
                สมาชิก
            </Link>
            <Link className={linkClass} to={routPath[4]} >
                ข่าว
            </Link>
            <Link className={linkClass} to={routPath[5]} >
                ขั้นตอนอกสาร
            </Link>
        </ListGroup>
    );
}


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

export function NestedList() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Nested List Items
                </ListSubheader>
            }
            className={classes.root}
        >
            <ListItem button>
                <ListItemIcon>
                    <SendIcon />
                </ListItemIcon>
                <ListItemText primary="Sent mail" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
            </ListItem>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </ListItem>
                </List>
            </Collapse>
        </List>
    );
}
