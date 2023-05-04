let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{},"type":null,"value":{}},"dynamicCanvasWidth":{"type":"desktop"},"enableLwc":true,"events":[{"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1625912803602-15wagwrov","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"Parent.details","fieldValue":"{action.response.records[0].details}"}],"id":"flex-action-1623820129952","type":"cardAction"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:cpq_cart_updated","element":"action","eventLabel":"pubsub","eventname":"cpq_cart_updated","eventtype":"pubsub","key":"event-0","recordIndex":"0"}],"globalCSS":false,"isFlex":true,"lwc":{"DeveloperName":"cfCpqAllButtonsDesktop_7_Vlocity","Id":"0RbDo000000VzLwCAK","ManageableState":"unmanaged","MasterLabel":"cfCpqAllButtonsDesktop_7_Vlocity","NamespacePrefix":"c"},"multilanguageSupport":true,"sessionVars":[],"states":[{"actions":[],"childCards":["cpqInProgressSubmittedDesktop"],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"childCardPreview","elementLabel":"FlexCard-1","name":"FlexCard","property":{"cardName":"cpqInProgressSubmittedDesktop","cardNode":"{record}","isChildCardTrackingEnabled":false,"parentAttribute":{"details":"{Parent.details}"},"recordId":"{recordId}","selectedState":"Order InProgress Submitted"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"}]}},"conditions":{"group":[{"field":"Parent.details.records[0].ObjectType","id":"state-condition-22","operator":"==","type":"custom","value":"Order"},{"group":[{"field":"Parent.details.records[0].orderStatusValue","id":"state-condition-24","operator":"==","type":"custom","value":"Submitted"},{"field":"Parent.details.records[0].orderStatusValue","id":"state-condition-25","logicalOperator":"||","operator":"==","type":"custom","value":"In Progress"}],"id":"state-condition-23","logicalOperator":"&&"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Order 1","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"#F3F2F2","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card  ","container":{"class":"slds-card "},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#F3F2F2;     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}},{"actions":[],"childCards":["cpqReadyToSubmitCancelledDesktop"],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"childCardPreview","elementLabel":"FlexCard-1","name":"FlexCard","property":{"cardName":"cpqReadyToSubmitCancelledDesktop","cardNode":"{record}","isChildCardTrackingEnabled":false,"parentAttribute":{"details":"{Parent.details}","isAsyncProcessCompleted":"{Parent.isAsyncProcessCompleted}","isAsyncProcessesPresent":"{Parent.isAsyncProcessesPresent}"},"recordId":"{recordId}","selectedState":"Order ReadyToSubmit Cancelled"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"}]}},"conditions":{"group":[{"field":"Parent.details.records[0].ObjectType","id":"state-condition-22","operator":"==","type":"custom","value":"Order"},{"group":[{"field":"Parent.details.records[0].orderStatusValue","id":"state-condition-24","operator":"==","type":"custom","value":"Ready To Submit"},{"field":"Parent.details.records[0].orderStatusValue","hasMergeField":false,"id":"state-condition-25","logicalOperator":"||","operator":"==","type":"custom","value":"Cancelled"},{"field":"Parent.details.records[0].orderStatusValue","hasMergeField":false,"id":"state-new-condition-205","logicalOperator":"||","operator":"==","type":"custom","value":"Activated"},{"field":"Parent.details.records[0].orderStatusValue","hasMergeField":false,"id":"state-new-condition-261","logicalOperator":"||","operator":"==","type":"custom","value":"Complete"},{"field":"Parent.details.records[0].orderStatusValue","hasMergeField":false,"id":"state-new-condition-316","logicalOperator":"||","operator":"==","type":"custom","value":"Queued"}],"id":"state-condition-23","logicalOperator":"&&"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Order 2","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"#F3F2F2","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card  ","container":{"class":"slds-card "},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#F3F2F2;     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}},{"actions":[],"childCards":["cpqAmendRequestedDesktop"],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"childCardPreview","elementLabel":"FlexCard-1","name":"FlexCard","property":{"cardName":"cpqAmendRequestedDesktop","cardNode":"{record}","isChildCardTrackingEnabled":false,"parentAttribute":{"details":"{Parent.details}"},"recordId":"{recordId}","selectedState":"Order Amend Requested"},"size":{"default":"12","isResponsive":false},"stateIndex":2,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"}]}},"conditions":{"group":[{"field":"Parent.details.records[0].ObjectType","id":"state-condition-22","operator":"==","type":"custom","value":"Order"},{"group":[{"field":"Parent.details.records[0].orderStatusValue","id":"state-condition-24","operator":"==","type":"custom","value":"Amend Requested"},{"field":"Parent.details.records[0].orderStatusValue","id":"state-condition-25","logicalOperator":"||","operator":"==","type":"custom","value":"Rejected"}],"id":"state-condition-23","logicalOperator":"&&"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Order 3","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"#F3F2F2","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card  ","container":{"class":"slds-card "},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#F3F2F2;     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}},{"actions":[],"childCards":["cpqOrderStatusDiscardedDesktop"],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"childCardPreview","elementLabel":"FlexCard-1","name":"FlexCard","property":{"cardName":"cpqOrderStatusDiscardedDesktop","cardNode":"{record}","isChildCardTrackingEnabled":false,"parentAttribute":{"details":"{Parent.details}"},"recordId":"{recordId}","selectedState":"Order Discarded"},"size":{"default":"12","isResponsive":false},"stateIndex":3,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"}]}},"conditions":{"group":[{"field":"Parent.details.records[0].ObjectType","id":"state-condition-32","operator":"==","type":"custom","value":"Order"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Order 4","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"#F3F2F2","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card  ","container":{"class":"slds-card "},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#F3F2F2;     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}},{"actions":["Create Frame Agreement-Quote","Update Frame Agreement-Quote","Create Frame Amendment-Quote","Update Frame Amendment-Quote"],"childCards":[],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"action","elementLabel":"Action-4","name":"Action","property":{"actionList":[{"actionIndex":0,"buttonVariant":"neutral","card":"{card}","contextId":"\\{Id}","data-conditions":{"group":[{"field":"Parent.details.records[0].discountsForSubmission","id":"state-new-condition-273","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"data-preloadConditionalElement":false,"displayAsButton":true,"draggable":false,"hideActionIcon":true,"isOpen":true,"key":"1644313073619-6whhx59la","label":"Action","record":"{record}","sObjectType":"Quote","stateAction":{"channelName":"close_modal","displayName":"{Label.CPQRequestPendingApproval}","flyoutLwc":"l-w-c-c-p-q-approve-discount-items-multi-language","flyoutParams":{"ContextId":"{Id}"},"flyoutType":"OmniScripts","hasExtraParams":true,"id":"flex-action-1644313075028","layoutType":"lightning","openFlyoutIn":"Modal","openUrlIn":"Current Window","osName":"LWCCPQ/ApproveDiscountItems/Multi-Language","type":"Flyout","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"buttonVariant":"neutral","card":"{card}","contextId":"\\{Id}","data-conditions":{"group":[{"field":"Parent.details.records[0].discountsForSubmission","id":"state-new-condition-273","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"data-preloadConditionalElement":false,"displayAsButton":true,"flyoutChannel":"close_modal","flyoutDetails":{"openFlyoutIn":"Modal"},"hideActionIcon":true,"iconName":"icon-v-document1-line","label":"{Label.CPQRequestPendingApproval}","record":"{record}","sObjectType":"Quote","showSpinner":"false","stateObj":"{record}"},"size":{"default":"2","isResponsive":false},"stateIndex":4,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"custom-btn","container":{"class":""},"customClass":"custom-btn","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"element"},{"class":"slds-col ","element":"action","elementLabel":"Action-5","name":"Action","property":{"buttonVariant":"neutral","card":"{card}","contextId":"\\{Id}","data-conditions":{"group":[{"field":"Parent.details.records[0].canCheckoutDiscounts","id":"state-new-condition-273","operator":"==","type":"custom","value":"true"},{"field":"Parent.details.records[0].frameAgreementPresent","id":"state-new-condition-2","logicalOperator":"&&","operator":"==","type":"custom","value":"false"}],"id":"state-condition-object","isParent":true},"displayAsButton":true,"hideActionIcon":true,"isTrackingDisabled":true,"record":"{record}","sObjectType":"Quote","stateAction":{"displayName":"{Label.CPQCreateFrameAgreement}","id":"flex-action-1631188921968","name":"Create Frame Agreement-Quote","openUrlIn":"Current Window","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"size":{"default":"2","isResponsive":false},"stateIndex":4,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"custom-btn","container":{"class":""},"customClass":"custom-btn","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"element"},{"class":"slds-col ","element":"action","elementLabel":"Action-6","name":"Action","property":{"buttonVariant":"neutral","card":"{card}","contextId":"\\{Id}","data-conditions":{"group":[{"field":"Parent.details.records[0].canCheckoutDiscounts","id":"state-new-condition-273","operator":"==","type":"custom","value":"true"},{"field":"Parent.details.records[0].frameAgreementPresent","id":"state-new-condition-2","logicalOperator":"&&","operator":"==","type":"custom","value":"false"}],"id":"state-condition-object","isParent":true},"displayAsButton":true,"hideActionIcon":true,"record":"{record}","sObjectType":"Quote","stateAction":{"displayName":"{Label.CPQUpdateFrameAgreement}","id":"flex-action-1631188924505","name":"Update Frame Agreement-Quote","openUrlIn":"Current Window","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"size":{"default":"2","isResponsive":false},"stateIndex":4,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"custom-btn","container":{"class":""},"customClass":"custom-btn","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"element"},{"class":"slds-col ","element":"action","elementLabel":"Action-7","name":"Action","property":{"buttonVariant":"neutral","card":"{card}","contextId":"\\{Id}","data-conditions":{"group":[{"field":"Parent.details.records[0].canCheckoutDiscounts","id":"state-new-condition-273","operator":"==","type":"custom","value":"true"},{"field":"Parent.details.records[0].frameAgreementPresent","id":"state-new-condition-2","logicalOperator":"&&","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"displayAsButton":true,"hideActionIcon":true,"record":"{record}","sObjectType":"Quote","stateAction":{"displayName":"{Label.CPQCreateFrameAmendment}","id":"flex-action-1631188928602","name":"Create Frame Amendment-Quote","openUrlIn":"Current Window","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"size":{"default":"2","isResponsive":false},"stateIndex":4,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"custom-btn","container":{"class":""},"customClass":"custom-btn","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"element"},{"class":"slds-col ","element":"action","elementLabel":"Action-8","name":"Action","property":{"buttonVariant":"neutral","card":"{card}","contextId":"\\{Id}","data-conditions":{"group":[{"field":"Parent.details.records[0].canCheckoutDiscounts","id":"state-new-condition-273","operator":"==","type":"custom","value":"true"},{"field":"Parent.details.records[0].frameAgreementPresent","id":"state-new-condition-2","logicalOperator":"&&","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"displayAsButton":true,"hideActionIcon":true,"record":"{record}","sObjectType":"Quote","stateAction":{"displayName":"{Label.CPQUpdateFrameAmendment}","id":"flex-action-1631196528377","name":"Update Frame Amendment-Quote","openUrlIn":"Current Window","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"size":{"default":"2","isResponsive":false},"stateIndex":4,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"custom-btn","container":{"class":""},"customClass":"custom-btn","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"element"},{"class":"slds-col ","element":"flexMenu","elementLabel":"Menu-9","name":"Menu","property":{"card":"{card}","flyoutObj":{"menuItemFlyout3":{"flyoutLwc":"cpqDeleteModal","flyoutParams":{"cartId":"{Id}","objType":"Quote"},"flyoutType":"childCard","id":"menuItemFlyout3"},"menuItemFlyout6":{"flyoutLwc":"cpqDiscount","flyoutParams":{"cartId":"{Id}"},"flyoutType":"childCard","id":"menuItemFlyout6"}},"iconName":"utility:down","menuItems":[{"actionConditions":null,"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Quote","stateAction":{"actionConditions":null,"displayName":"{Label.CPQViewRecord}","id":"flex-action-1629443394229","name":"View Record","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"card":"{card}","contextId":"\\{Id}","sObjectType":"Quote","stateAction":{"actionConditions":null,"displayName":"{Label.CPQViewRecord}","id":"flex-action-1629443394229","name":"View Record","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"{Label.CPQViewRecord}","name":"menu-item-1613705040940-1","showSpinner":"false"},{"actionConditions":null,"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Quote","stateAction":{"actionConditions":null,"displayName":"{Label.CPQEdit}","id":"flex-action-1629443398414","name":"Edit Record","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"card":"{card}","contextId":"\\{Id}","sObjectType":"Quote","stateAction":{"actionConditions":null,"displayName":"{Label.CPQEdit}","id":"flex-action-1629443398414","name":"Edit Record","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"{Label.CPQEdit}","name":"menu-item-1613705065307-1","showSpinner":"false"},{"actionConditions":null,"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Quote","stateAction":{"actionConditions":null,"displayName":"{Label.CPQGenerateDocumentPDF}","id":"flex-action-1629443400958","name":"Generate Document PDF","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"actionIndex":0,"card":"{card}","contextId":"\\{Id}","draggable":false,"isOpen":true,"key":"1668060504677-o2pktjsjd","label":"Action","sObjectType":"Quote","stateAction":{"Attachments":"","ContentDocumentLinks":"","actionConditions":null,"displayName":"{Label.CPQGenerateDocumentPDF}","id":"flex-action-1668060506095","name":"Generate Document PDF Quote","openUrlIn":"Current Window","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"\\{Label.CPQGenerateDocumentPDF}","name":"menu-item-1615211289180-2","showSpinner":"false"},{"actionConditions":null,"actionData":{"card":"{card}","stateAction":{"actionConditions":null,"cardName":"cpqDeleteModal","displayName":"{Label.CPQDelete}","flyoutLwc":"cpqDeleteModal","flyoutParams":{"cartId":"{Id}","objType":"Quote"},"flyoutType":"childCard","hasExtraParams":true,"id":"flex-action-1627050588370","menuFlyoutId":"menuItemFlyout3","openFlyoutIn":"Modal","openUrlIn":"Current Window","parent":"menu","type":"Flyout","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"card":"{card}","stateAction":{"actionConditions":null,"cardName":"cpqDeleteModal","displayName":"{Label.CPQDelete}","flyoutLwc":"cpqDeleteModal","flyoutParams":{"cartId":"{Id}","objType":"Quote"},"flyoutType":"childCard","hasExtraParams":true,"id":"flex-action-1627050588370","menuFlyoutId":"menuItemFlyout3","openFlyoutIn":"Modal","openUrlIn":"Current Window","parent":"menu","type":"Flyout","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"{Label.CPQDelete}","name":"menu-item-1615211340391-2","showSpinner":"false"},{"actionConditions":null,"actionData":{"card":"{card}","stateAction":{"Web Page":{"targetName":"/apex/QuoteCloneWithLineItems?id={Id}"},"actionConditions":null,"displayName":"{Label.CPQCloneWithProducts}","id":"flex-action-1627050603492","openUrlIn":"New Tab/Window","parent":"menu","targetType":"Web Page","type":"Custom","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"card":"{card}","stateAction":{"Web Page":{"targetName":"/apex/QuoteCloneWithLineItems?id={Id}"},"actionConditions":null,"displayName":"{Label.CPQCloneWithProducts}","id":"flex-action-1627050603492","openUrlIn":"New Tab/Window","parent":"menu","targetType":"Web Page","type":"Custom","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"{Label.CPQCloneWithProducts}","name":"menu-item-1615211602582-2","showSpinner":"false"},{"actionConditions":null,"actionData":{"card":"{card}","stateAction":{"Web Page":{"targetName":"/apex/QuoteClonePage?id={Id}"},"actionConditions":null,"displayName":"{Label.CPQCloneWithoutProducts}","id":"flex-action-1627050631088","openUrlIn":"New Tab/Window","parent":"menu","targetType":"Web Page","type":"Custom","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"card":"{card}","stateAction":{"Web Page":{"targetName":"/apex/QuoteClonePage?id={Id}"},"actionConditions":null,"displayName":"{Label.CPQCloneWithoutProducts}","id":"flex-action-1627050631088","openUrlIn":"New Tab/Window","parent":"menu","targetType":"Web Page","type":"Custom","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"{Label.CPQCloneWithoutProducts}","name":"menu-item-1615212398990-2","showSpinner":"false"},{"actionConditions":{"group":[{"field":"Parent.isAsyncProcessesPresent","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"0"},{"group":[{"field":"Parent.isAsyncProcessesPresent","hasMergeField":false,"id":"state-new-condition-21","operator":">","type":"custom","value":"0"},{"field":"Parent.isAsyncProcessCompleted","hasMergeField":false,"id":"state-new-condition-53","logicalOperator":"&&","operator":"==","type":"custom","value":"true"}],"id":"state-new-group-22","logicalOperator":"||"}],"id":"state-condition-object","isParent":true},"actionData":{"card":"{card}","stateAction":{"actionConditions":null,"cardName":"cpqDiscount","displayName":"{Label.CPQApplyDiscount}","flyoutLwc":"cpqDiscount","flyoutParams":{"cartId":"{Id}"},"flyoutType":"childCard","hasExtraParams":true,"id":"flex-action-1627050652633","menuFlyoutId":"menuItemFlyout6","openFlyoutIn":"Modal","openUrlIn":"Current Window","parent":"menu","type":"Flyout","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"actionIndex":0,"card":"{card}","draggable":false,"isOpen":true,"key":"1658213892132-zrtmwekzs","label":"Action","stateAction":{"actionConditions":null,"cardName":"cpqDiscount","channelName":"close_modal_apply_discount","displayName":"{Label.CPQApplyDiscount}","flyoutLwc":"cpqDiscount","flyoutParams":{"cartId":"{Id}"},"flyoutType":"childCard","hasExtraParams":true,"id":"flex-action-1658213893990","openFlyoutIn":"Modal","openUrlIn":"Current Window","type":"Flyout","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"{Label.CPQApplyDiscount}","name":"menu-item-1615280948275-2","showSpinner":"false"}],"overflow":true,"position":"right","record":"{record}","size":"small","type":"action","variant":"neutral"},"size":{"default":"1","isResponsive":false},"stateIndex":4,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"custom-btn","container":{"class":""},"customClass":"custom-btn","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"element"}]}},"conditions":{"group":[{"field":"Parent.details.records[0].ObjectType","id":"state-condition-33","operator":"==","type":"custom","value":"Quote"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Quote","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"#F3F2F2","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card  ","container":{"class":"slds-card "},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#F3F2F2;     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"cpqAllButtonsDesktop","Id":"a5aDo000001Jx6JIAC","vlocity_cmt__GlobalKey__c":"cpqAllButtonsDesktop/Vlocity/5/1658209909837"};
  export default definition