# Marker Callback bug reproduction

This project reproduces a bug with Google Maps JS 3.46 whereby a Map Marker set to draggable cannot be dragged.

Setting the Google Maps version back to 3.45 (in `.env.local`, see below) results in the marker being draggable as expected

# Environment variables

Create an empty file at the project root named `.env.local` as shown:

```
GOOGLE_MAPS_API_KEY=[YOUR GOOGLE MAPS API KEY HERE]
GOOGLE_MAPS_API_VERSION=[DESIRED JS LIBRARY VERSION HERE]
```

The library version can be any of those [supported by Google](https://developers.google.com/maps/documentation/javascript/versions).

With `3.45`, the map marker is draggable as expected. With `3.46` it is not - attempting to drag the marker instead moves the whole map and the mouse cursor does not change when hovering over the marker.

# Installing and running the project

Clone the repo and then run `yarn install` to install dependencies. I recommend using VSCode to debug. There are two debug configurations included in `.vscode/launch.json`: 1) Run "Next.js: debug server-side" to start the server with the debugger attached, and 2) run "Launch Chrome" to view and debug the page in Google Chrome.