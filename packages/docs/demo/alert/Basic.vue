<template>
    <h2>通过 slot 传入内容</h2>
    <div style="max-width: 600px">
      <xm-alert type="success">Success alert</xm-alert>
      <xm-alert type="info">Info alert</xm-alert>
      <xm-alert type="warning">Warning alert</xm-alert>
      <xm-alert type="danger">Error alert</xm-alert>
    </div>
    <h2>通过 prop 传入内容</h2>
    <div style="max-width: 600px">
      <xm-alert type="success" title="Success alert" />
      <xm-alert type="info" title="Info alert" />
      <xm-alert type="warning" title="Warning alert" />
      <xm-alert type="danger" title="Error alert" />
    </div>
  </template>
  