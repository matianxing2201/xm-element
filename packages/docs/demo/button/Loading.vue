<template>
    <div>
      <xm-button type="primary" loading>Loading</xm-button>
      <xm-button type="primary" loading-icon="circle-notch" loading>Loading</xm-button>
      <xm-button type="primary" loading>
        <template #loading>
          <xm-icon style="margin-right: 6px" icon="star" spin />
        </template>
        Loading
      </xm-button>
    </div>
  </template>
  