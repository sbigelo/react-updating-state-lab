import React from 'react'


class YouTubeDebugger extends React.Component {

    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }


    handleBitClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    handleResolutionClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.video,
                    resolution: '720p'
                }
            }
        })
    }


    render() {
        return(
            <div>
                <button 
                onClick={this.handleBitClick}
                className='bitrate'>Change bitrate</button>
                <button 
                onClick={this.handleResolutionClick}
                className='resolution'>Resolution</button>
            </div>
        )
    }


}



export default YouTubeDebugger;