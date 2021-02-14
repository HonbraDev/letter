import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Grid } from "@material-ui/core";
import {
  FormatBoldOutlined,
  FormatItalicOutlined,
  FormatUnderlinedOutlined,
  StrikethroughSOutlined,
  FormatColorTextOutlined,
  FormatColorFillOutlined,
  FormatQuoteOutlined,
  CodeOutlined,
  FormatListNumberedOutlined,
  FormatListBulletedOutlined,
  FormatIndentDecreaseOutlined,
  FormatIndentIncreaseOutlined,
  FormatTextdirectionLToROutlined,
  FormatAlignLeftOutlined,
  InsertLinkOutlined,
  InsertPhotoOutlined,
  TheatersOutlined,
  FunctionsOutlined,
  FormatClearOutlined,
} from "@material-ui/icons";

const useStyles = makeStyles({
  toolbar: {
    width: "100%",
  },
});

function Toolbar() {
  const classes = useStyles();

  return (
    <div id="toolbar" className={classes.toolbar}>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <ToolbarIcon active={false} icon={<FormatBoldOutlined />} />
          <ToolbarIcon active={false} icon={<FormatItalicOutlined />} />
          <ToolbarIcon active={false} icon={<FormatUnderlinedOutlined />} />
          <ToolbarIcon active={false} icon={<StrikethroughSOutlined />} />
        </Grid>
        <Grid item>
          <ToolbarIcon active={false} icon={<span>x1</span>} />
          <ToolbarIcon active={false} icon={<span>x2</span>} />
        </Grid>
        <Grid item>
          <ToolbarIcon active={false} icon={<span>h1</span>} />
          <ToolbarIcon active={false} icon={<span>h2</span>} />
          <ToolbarIcon active={false} icon={<FormatColorTextOutlined />} />
          <ToolbarIcon active={false} icon={<FormatColorFillOutlined />} />
        </Grid>
        <Grid item>
          <ToolbarIcon active={false} icon={<FormatQuoteOutlined />} />
          <ToolbarIcon active={false} icon={<CodeOutlined />} />
        </Grid>
        <Grid item>
          <ToolbarIcon active={false} icon={<FormatListNumberedOutlined />} />
          <ToolbarIcon active={false} icon={<FormatListBulletedOutlined />} />
          <ToolbarIcon active={false} icon={<FormatIndentDecreaseOutlined />} />
          <ToolbarIcon active={false} icon={<FormatIndentIncreaseOutlined />} />
        </Grid>
        <Grid item>
          <ToolbarIcon
            active={false}
            icon={<FormatTextdirectionLToROutlined />}
          />
          <ToolbarIcon active={false} icon={<FormatAlignLeftOutlined />} />
        </Grid>
        <Grid item>
          <ToolbarIcon active={false} icon={<InsertLinkOutlined />} />
          <ToolbarIcon active={false} icon={<InsertPhotoOutlined />} />
          <ToolbarIcon active={false} icon={<TheatersOutlined />} />
          <ToolbarIcon active={false} icon={<FunctionsOutlined />} />
        </Grid>
        <Grid item>
          <ToolbarIcon active={false} icon={<FormatClearOutlined />} />
        </Grid>
      </Grid>
    </div>
  );
}

function ToolbarIcon(props: { active: boolean; icon: React.ReactElement }) {
  return (
    <IconButton size="small" color={props.active ? "inherit" : "default"}>
      {props.icon}
    </IconButton>
  );
}

export default Toolbar;

/* <div id="toolbar">
      <span className="ql-formats">
        <select className="ql-header"></select>
      </span>
      <span className="ql-formats">
        <button className="ql-bold button"></button>
        <button className="ql-italic button"></button>
        <button className="ql-underline button"></button>
        <button className="ql-strike button"></button>
      </span>
      <span className="ql-formats">
        <select className="ql-color"></select>
        <select className="ql-background"></select>
      </span>
      <span className="ql-formats">
        <button className="ql-script button" value="sub"></button>
        <button className="ql-script button" value="super"></button>
      </span>
      <span className="ql-formats">
        <button className="ql-header button" value="1"></button>
        <button className="ql-header button" value="2"></button>
        <button className="ql-blockquote button"></button>
        <button className="ql-code-block button"></button>
      </span>
      <span className="ql-formats">
        <button className="ql-list button" value="ordered"></button>
        <button className="ql-list button" value="bullet"></button>
        <button className="ql-indent button" value="-1"></button>
        <button className="ql-indent button" value="+1"></button>
      </span>
      <span className="ql-formats">
        <button className="ql-direction button" value="rtl"></button>
        <select className="ql-align"></select>
      </span>
      <span className="ql-formats">
        <button className="ql-link button"></button>
        <button className="ql-image button"></button>
        <button className="ql-video button"></button>
        <button className="ql-formula button"></button>
      </span>
      <span className="ql-formats">
        <button className="ql-clean button"></button>
      </span>
    </div> */
