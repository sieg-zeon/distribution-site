import React, { FC, useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import firebase from '../firebase'
import { TileData } from "../types/types"
import TopHeader from "../components/topHeader";

const useStyles = makeStyles(() =>
    createStyles({
        main: {
            textAlign: "center",
            marginTop: "5%",
        },
        tileIimage: {
            height: "436px",
            width: "436px"
        }

    })
)

const DownloadPage: FC = () => {
    const { keyword } = useParams()
    const classes = useStyles()
    const [data, setData] = useState<TileData[]>([])

    const getData = async (searchword: string | undefined) => {
        const db = firebase.firestore()
        const tileDataRef = db.collection('tileData')
        const searchedData = tileDataRef.where('keyword', 'array-contains', searchword)
        const snapShot = await searchedData.get()
        const temporaryData: object[] = []

        snapShot.docs.map(doc => {
            temporaryData.push(doc.data())
        })

        setData(temporaryData as TileData[])
    }

    useEffect(() => {
        getData(keyword)
    }, [])

    const displayImage = () => {
        return (
            <div>
                {data.map((tile) => (
                    <div>
                        <img className={classes.tileIimage} src={tile.image} alt={tile.title} />
                    </div>
                ))}
            </div>
        )
    }
    const downloadButton = () => {
        return (
            <div>
                {data.map((tile)=>(
                    <Button
                        variant="contained"
                        href={tile.downloadUrl}
                    >無料ダウンロード
                    </Button>
                ))}
            </div>
        )
    }

    return (
        <div className={classes.main}>
            {displayImage()}
            {downloadButton()}
        </div>
    )
}

export default DownloadPage
