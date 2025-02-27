<template>
    <xm-popconfirm
      width="220"
      confirm-button-text="Delete"
      cancel-button-text="No,Thanks"
      icon="trash"
      icon-color="#626aef"
      title="Are you sure to delete this item?"
      @confirm="'Delete Success'"
      @cancel="'Cancel'"
    >
      <xm-button>Delete</xm-button>
    </xm-popconfirm>
  </template>
  