import React, { FC } from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'

import TopHeader from "../components/topHeader"
import TopMain from "../components/topPage/topMain"
import ResultPage from "./resultPage"
import DownloadPage from "./downloadPage"

const TopPage: FC = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <TopHeader />
                        <TopMain />
                    </Route>
                    <Route path="/search/:keyword" exact>
                        <ResultPage />
                    </Route>
                    <Route path="/download/:keyword" exact>
                        <TopHeader />
                        <DownloadPage />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}
export default TopPage