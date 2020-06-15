import React, { FC } from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/AppBar'

const TopHeader: FC = () => {
    return (
        <AppBar position='static'>
            <ToolBar position='static'>
                <h2>タイトル</h2>
            </ToolBar>
        </AppBar>
    )
}
export default TopHeader