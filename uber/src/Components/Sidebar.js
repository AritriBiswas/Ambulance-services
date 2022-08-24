import React, { useEffect, useState } from 'react'
import './SIdebar.css'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import Sidebaroptions from "./Sidebaroptions"
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import db from './firebase'
import { useStateValue } from "../Contexts/StateProvider";

const Sidebar = () => {
    const [channels, setChannels] = useState([]);
    const [{user}]=useStateValue();

    useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot => {
            setChannels(
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    name: doc.data().name
                })))
        })
    }, [])

    return (
        <div className='sidebar' >
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2></h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user?. displayName}
                    </h3>
                </div>
                <CreateIcon/>
            </div>
            {/* <SidebarOption Icon={InsertCommentIcon} title="Threads" />
            <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
            <SidebarOption Icon={DraftsIcon} title="Saved items" />
            <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
            
            <SidebarOption Icon={AppsIcon} title="Apps" />
            <SidebarOption Icon={FileCopyIcon} title="File browser" /> */}
            <Sidebaroptions Icon={ExpandLessIcon} title="Show less" />
            
            <hr />
            <Sidebaroptions Icon={ExpandMoreIcon} title="Channels" />
            <hr />
            <Sidebaroptions Icon={AddIcon} addChannelOption title="Add Channel" />

            {
                channels.map(channel => (
                    <Sidebaroptions title={channel.name} id={channel.id} />
                )
                )
            }

        </div>
    )
}

export default Sidebar
