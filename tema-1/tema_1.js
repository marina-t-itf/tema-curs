body {
    max-width: 960px;
    margin: auto;
    overflow-y: scroll;
}

.header {
    display: flex;
    height: 280px;
    background-position: center;
    align-items: center;
    padding: 0 0 0 30px;
    font-size: 30px;
    font-weight: bolder;
    color: white;
}

.menu {
    padding: 10px 0 10px 0;
}

.tiledContent {
    display: flex;
    flex-wrap: wrap;
}

.contentTile {
    width: 250px;
    height: 150px;
    background-color: lightblue;
    margin: 5px;
}

.popup {
    display: none;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: lightpink;
}

.popupHeader {
    display: flex;
    flex-direction: row-reverse;
    padding: 0 8px 0 8px;
}
.popupHeader > span {
    cursor: pointer;
}

@media only screen and (min-width: 600px) {
    .popup {
        height: 400px;
        top: 50%;
        left: 50%;
        bottom: 50%;
        right: 50%;
        margin-top: -200px;
    }
    .small {
        width: 400px;
        margin-left: -200px;
    }
    .medium {
        width: 600px;
        margin-left: -300px;
    }
}
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
