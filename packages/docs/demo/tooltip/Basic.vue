<template>
    <div class="tooltip-base-box">
      <div class="row center">
        <xm-tooltip
          class="box-item"
          content="Top Left prompts info"
          placement="top-start"
        >
          <xm-button>top-start</xm-button>
        </xm-tooltip>
        <xm-tooltip
          class="box-item"
          content="Top Center prompts info"
          placement="top"
        >
          <xm-button>top</xm-button>
        </xm-tooltip>
        <xm-tooltip
          class="box-item"
          content="Top Right prompts info"
          placement="top-end"
        >
          <xm-button>top-end</xm-button>
        </xm-tooltip>
      </div>
      <div class="row">
        <xm-tooltip
          class="box-item"
          content="Left Top prompts info"
          placement="left-start"
        >
          <xm-button>left-start</xm-button>
        </xm-tooltip>
        <xm-tooltip
          class="box-item"
          content="Right Top prompts info"
          placement="right-start"
        >
          <xm-button>right-start</xm-button>
        </xm-tooltip>
      </div>
      <div class="row">
        <xm-tooltip
          class="box-item"
          content="Left Center prompts info"
          placement="left"
        >
          <xm-button class="mt-3 mb-3">left</xm-button>
        </xm-tooltip>
        <xm-tooltip
          class="box-item"
          content="Right Center prompts info"
          placement="right"
        >
          <xm-button>right</xm-button>
        </xm-tooltip>
      </div>
      <div class="row">
        <xm-tooltip
          class="box-item"
          content="Left Bottom prompts info"
          placement="left-end"
        >
          <xm-button>left-end</xm-button>
        </xm-tooltip>
        <xm-tooltip
          class="box-item"
          content="Right Bottom prompts info"
          placement="right-end"
        >
          <xm-button>right-end</xm-button>
        </xm-tooltip>
      </div>
      <div class="row center">
        <xm-tooltip
          class="box-item"
          content="Bottom Left prompts info"
          placement="bottom-start"
        >
          <xm-button>bottom-start</xm-button>
        </xm-tooltip>
        <xm-tooltip
          class="box-item"
          content="Bottom Center prompts info"
          placement="bottom"
        >
          <xm-button>bottom</xm-button>
        </xm-tooltip>
        <xm-tooltip
          class="box-item"
          content="Bottom Right prompts info"
          placement="bottom-end"
        >
          <xm-button>bottom-end</xm-button>
        </xm-tooltip>
      </div>
    </div>
  </template>

<script>

</script>
  
  <style>
  .tooltip-base-box {
    width: 600px;
  }
  .tooltip-base-box .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .tooltip-base-box .center {
    justify-content: center;
  }
  .tooltip-base-box .box-item {
    width: 110px;
    margin-top: 10px;
  }
  </style>
  