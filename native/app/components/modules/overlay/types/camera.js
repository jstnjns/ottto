import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  WebView,
  Dimensions,
} from 'react-native'
import Video from 'react-native-video'


const playerWidth = 320
const playerHeight = 180
let playerUri = 'http://192.168.1.13:8888/stream.mjpeg'
// let playerUri = 'https://vjs.zencdn.net/v/oceans.mp4'

class Camera extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.renderWebView()}
      </View>
    )
  }

  renderVideo() {
    return (
      <Video source={{ uri: playerUri }}
        style={styles.player}
        ref={(ref) => { this.player = ref }}    // Store reference
        rate={1.0}                              // 0 is paused, 1 is normal.
        volume={1.0}                            // 0 is muted, 1 is normal.
        muted={false}                           // Mutes the audio entirely.
        paused={false}                          // Pauses playback entirely.
        resizeMode="cover"                      // Fill the whole screen at aspect ratio.*
        repeat={true}                           // Repeat forever.
        playInBackground={false}                // Audio continues to play when app entering background.
        playWhenInactive={false}                // [iOS] Video continues to play when control or notification center are shown.
        ignoreSilentSwitch={"obey"}             // [iOS] ignore | obey - When 'ignore', audio will still play with the iOS hard silent switch set to silent. When 'obey', audio will toggle with the switch. When not specified, will inherit audio settings as usual.
        progressUpdateInterval={250.0}          // [iOS] Interval to fire onProgress (default to ~250ms)
        />
    )
  }

  renderWebView() {
    return (
      <WebView
        style={styles.player}
        automaticallyAdjustContentInsets={true}
        scalesPageToFit={true}
        startInLoadingState={false}
        contentInset={{top: 0, right: 0, left: 0, bottom: 0}}
        scrollEnabled={false}
        source={{html: this.formatHtml(), baseUrl: '/'}} />
    )
  }

  formatHtml() {
    let html = '\
      <html>\
        <body>\
          <img src="' + playerUri + '"\
            width="100%"\
            style="background-color: white; min-height: 100%; min-width: 100%; position: fixed; top: 0; left: 0;">\
        </body>\
      </html>\
    '

    // let html = '\
    //   <html>\
    //     <head>\
    //       <style> #videoId { position: absolute; top: 0; left: 0; right: 0; margin: auto; width: 100%; height: 100%; } }</style>\
    //     </head>\
    //     <body>\
    //       <video id="videoId" webkit-playsinline="true" playsinline="true" autoplay>\
    //         <source src="' + playerUri + '" type="video/mp4" />\
    //       </video>\
    //     </body>\
    //   </html>\
    // '

    return (html);
  }
}

const styles = StyleSheet.create({
  container: {
    height: playerHeight,
    alignItems: 'center',
  },
  player: {
    width: playerWidth,
    height: playerHeight,
    backgroundColor: 'orange',
  },
})

export default Camera
