
/*
 * @author Will Steinmetz
 * Test suite for the notific8 JavaScript plug-in
 * Copyright (c)2013-2016, Will Steinmetz
 * Licensed under the BSD license.
 * http://opensource.org/licenses/BSD-3-Clause
 */
var resetOptions;

describe('notific8 methods', function() {
  it('should set the default z-index to 5000', function() {
    notific8('zindex', 5000);
    expect(notific8Defaults.zindex).toEqual(5000);
  });
  it('should destroy the notification containers', function() {
    var containerClass, containers;
    notific8('hello world!');
    notific8('destroy');
    containerClass = "" + notific8Defaults.namespace + "-container";
    containers = document.getElementsByClassName(containerClass);
    expect(containers.length).toEqual(0);
  });
  it('should remove the current notification', function() {
    var notificationClass, notifications;
    notificationClass = "" + notific8Defaults.namespace + "-notification";
    notific8('hello world!');
    notifications = document.getElementsByClassName(notificationClass);
    expect(notifications.length).toEqual(1);
    notific8('remove');
    notifications = document.getElementsByClassName(notificationClass);
    expect(notifications.length).toEqual(0);
  });
  xit('should register a new module', function() {
    notific8('registerModule', 'testModule', 'beforeContent', {}, function() {});
    expect(notific8RegisteredModules.beforeContent.length).toEqual(3);
    notific8('registerModule', 'testModule', 'afterContent', {}, function() {});
    expect(notific8RegisteredModules.afterContent.length).toEqual(1);
  });
});

resetOptions = function() {
  return window.notific8Defaults = {
    life: 10000,
    theme: 'legacy',
    color: 'teal',
    sticky: false,
    verticalEdge: 'right',
    horizontalEdge: 'top',
    zindex: 1100,
    closeText: 'close',
    onInit: null,
    onCreate: null,
    onClose: null,
    namespace: 'notific8',
    height: {
      atomic: 70,
      chicchat: 120,
      legacy: 90
    }
  };
};

describe('notific8 configruation setting', function() {
  var customConfig;
  customConfig = {
    life: 20000,
    theme: 'atomic',
    color: 'pear',
    sticky: true,
    verticalEdge: 'left',
    horizontalEdge: 'bottom',
    zindex: 1200,
    closeText: 'exit',
    onInit: function(data) {},
    onCreate: function(notification, data) {},
    onClose: function(notification, data) {},
    namespace: 'custom',
    height: {
      atomic: 80,
      chicchat: 80,
      legacy: 80
    }
  };
  beforeAll(function() {
    return resetOptions();
  });
  it('should set the configuration via the configure method', function() {
    notific8('configure', customConfig);
    expect(notific8Defaults.life).toEqual(20000);
    expect(notific8Defaults.theme).toEqual('atomic');
    expect(notific8Defaults.color).toEqual('pear');
    expect(notific8Defaults.sticky).toEqual(true);
    expect(notific8Defaults.verticalEdge).toEqual('left');
    expect(notific8Defaults.horizontalEdge).toEqual('bottom');
    expect(notific8Defaults.zindex).toEqual(1200);
    expect(notific8Defaults.closeText).toEqual('exit');
    expect(typeof notific8Defaults.onInit).toEqual('function');
    expect(typeof notific8Defaults.onCreate).toEqual('function');
    expect(typeof notific8Defaults.onClose).toEqual('function');
    expect(notific8Defaults.namespace).toEqual('custom');
    expect(notific8Defaults.height.atomic).toEqual(80);
    expect(notific8Defaults.height.chicchat).toEqual(80);
    expect(notific8Defaults.height.legacy).toEqual(80);
  });
  it('should set the configuration via the config method', function() {
    notific8('config', customConfig);
    expect(notific8Defaults.life).toEqual(20000);
    expect(notific8Defaults.theme).toEqual('atomic');
    expect(notific8Defaults.color).toEqual('pear');
    expect(notific8Defaults.sticky).toEqual(true);
    expect(notific8Defaults.verticalEdge).toEqual('left');
    expect(notific8Defaults.horizontalEdge).toEqual('bottom');
    expect(notific8Defaults.zindex).toEqual(1200);
    expect(notific8Defaults.closeText).toEqual('exit');
    expect(typeof notific8Defaults.onInit).toEqual('function');
    expect(typeof notific8Defaults.onCreate).toEqual('function');
    expect(typeof notific8Defaults.onClose).toEqual('function');
    expect(notific8Defaults.namespace).toEqual('custom');
    expect(notific8Defaults.height.atomic).toEqual(80);
    expect(notific8Defaults.height.chicchat).toEqual(80);
    expect(notific8Defaults.height.legacy).toEqual(80);
  });
});

describe('testing notification settings on notification initialization', function() {
  var notificationClass;
  notificationClass = "" + notific8Defaults.namespace + "-notification";
  beforeEach(function() {
    resetOptions();
    return notific8('remove');
  });
  it('should set the heading option', function() {
    var notification, notificationHeader, notificationHeaderClass;
    notific8('This is testing the heading option.', {
      heading: 'This is a heading'
    });
    notification = document.getElementsByClassName(notificationClass)[0];
    notificationHeaderClass = "." + notific8Defaults.namespace + "-heading";
    notificationHeader = notification.querySelectorAll(notificationHeaderClass);
    expect(notificationHeader.length).toEqual(1);
  });
  it('should set the sticky option', function() {
    var notification;
    notific8('This is testing the sticky option', {
      sticky: true
    });
    notification = document.getElementsByClassName(notificationClass)[0];
    expect(notification.classList.contains('sticky')).toEqual(true);
  });
  it('should set the closeText option', function() {
    var notification, notificationClose, notificationCloseClass;
    notific8('This is testing the closeText option', {
      sticky: true,
      closeText: 'exit'
    });
    notification = document.getElementsByClassName(notificationClass)[0];
    notificationCloseClass = "." + notific8Defaults.namespace + "-close";
    notificationClose = notification.querySelector(notificationCloseClass);
    return expect(notificationClose.innerText).toEqual('exit');
  });
  it('should set the theme', function() {
    var notification;
    notific8('This is testing the theme option', {
      theme: 'materialish'
    });
    notification = document.getElementsByClassName(notificationClass)[0];
    return expect(notification.classList.contains('family-materialish')).toEqual(true);
  });
  it('should set the theme color', function() {
    var notification;
    notific8('This is testing the theme color option', {
      theme: 'materialish',
      color: 'lilrobot'
    });
    notification = document.getElementsByClassName(notificationClass)[0];
    expect(notification.classList.contains('family-materialish')).toEqual(true);
    return expect(notification.classList.contains('lilrobot')).toEqual(true);
  });
});
