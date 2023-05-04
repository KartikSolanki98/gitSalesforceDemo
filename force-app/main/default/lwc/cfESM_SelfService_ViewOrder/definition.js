let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":"","name":""},"type":"Custom","value":{"body":"{\"tabName\":\"existingAssets\"}","dsDelay":"","resultVar":""}},"enableLwc":true,"events":[{"actionList":[{"actionIndex":0,"card":"{card}","draggable":true,"isOpen":false,"isTrackingDisabled":false,"key":"1657706426497-urhsab5pp","label":"Action","stateAction":{"Web Page":{"targetName":"/apex"},"displayName":"Action","eventName":"setValues","fieldValues":[{"fieldName":"primaryOrderId","fieldValue":"{action.esm_selfservice_primary_order_id}"},{"fieldName":"orderType","fieldValue":"{action.esm_selfservice_order_type}"}],"id":"flex-action-1659127084311","openUrlIn":"Current Window","targetType":"Web Page","type":"cardAction","vlocityIcon":"standard-default"}},{"actionIndex":1,"card":"{card}","draggable":false,"isOpen":true,"key":"1659127092968-cihvj8141","label":"TriggerPollingAction","stateAction":{"displayName":"Action","eventName":"esm_selfservice_trigger_polling","extraParams":{"cartId":"{primaryOrderId}","orderType":"{orderType}"},"hasExtraParams":true,"id":"flex-action-1659127784739","message":"onTriggerPolling","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":"standard-default"}}],"channelname":"ESM_SelfService_CreateOrder","displayLabel":"get_primary_order_detail_summary","element":"action","eventLabel":"custom event","eventname":"get_primary_order_detail_summary","eventtype":"event","key":"event-0","recordIndex":"0","showSpinner":"true"},{"actionList":[{"actionIndex":0,"card":"{card}","draggable":false,"isOpen":true,"key":"1659542897046-yfpoxshtt","label":"Action","stateAction":{"Web Page":{"targetName":"/apex"},"displayName":"Action","eventName":"setValues","fieldValues":[{"fieldName":"isComplete","fieldValue":"{action.isComplete}"}],"id":"flex-action-1659542947481","openUrlIn":"Current Window","targetType":"Web Page","type":"cardAction","vlocityIcon":"standard-default"}}],"channelname":"ESM_SelfService_ViewOrder","displayLabel":"onasyncupdate","element":"action","eventLabel":"custom event","eventname":"onasyncupdate","eventtype":"event","key":"event-1","recordIndex":"0","showSpinner":"false"}],"globalCSS":true,"isFlex":true,"lwc":{"DeveloperName":"cfESM_SelfService_ViewOrder_21_salesforce","Id":"0RbDo000000VzMdKAU","ManageableState":"unmanaged","MasterLabel":"cfESM_SelfService_ViewOrder_21_salesforce","NamespacePrefix":"c"},"selectableMode":"Multi","sessionVars":[{"isApi":true,"name":"ConfirmOrderPage","val":"order_confirmation__c"},{"isApi":true,"name":"ChangeToOrderPage","val":"change_to_order__c"},{"isApi":true,"name":"ConfigurePage","val":"Configure_Product__c"}],"states":[{"actions":[],"childCards":["ESM_SelfService_AsyncStatus","ESM_SelfService_ViewOrderItemContainer"],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"customLwc","elementLabel":"Custom LWC-0","name":"Custom LWC","property":{"customlwcname":"b2bSelfServiceOrderSummaryUtil"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"},{"class":"slds-col ","element":"customLwc","elementLabel":"Custom LWC-1","name":"Custom LWC","property":{"customlwcname":"b2bSelfServiceClientDetails","eventName":"get_primary_order_detail_summary","getKeys":"esm_selfservice_primary_order_id,esm_selfservice_order_type"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"},{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Block-1-Text-0","key":"element_element_block_2_0_outputField_0_0","name":"Text","parentElementKey":"element_block_2_0","property":{"card":"{card}","mergeField":"%3Cdiv%3E%3Cspan%20style=%22font-size:%2018pt;%22%3E%3Cstrong%3EView%20Order%20Summary%3C/strong%3E%3C/span%3E%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"font-size: 24px; line-height: 20px;","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n        color:#0C132B; font-size: 24px; line-height: 20px;","text":{"align":"center","color":"#0C132B"}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"font-size: 24px; line-height: 20px;","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n        color:#0C132B; font-size: 24px; line-height: 20px;","text":{"align":"center","color":"#0C132B"}}}],"type":"text"},{"class":"slds-col ","element":"outputField","elementLabel":"Block-1-Text-0-clone-0","key":"element_element_block_2_0_outputField_1_0","name":"Text","parentElementKey":"element_block_2_0","property":{"card":"{card}","mergeField":"%3Cdiv%3EReview%20the%20changes%20and%20submit%20the%20order%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"font-size: 20px; line-height: 18px;","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n        color:#0C132B; font-size: 20px; line-height: 18px;","text":{"align":"center","color":"#0C132B"}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"font-size: 20px; line-height: 18px;","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n        color:#0C132B; font-size: 20px; line-height: 18px;","text":{"align":"center","color":"#0C132B"}}}],"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"Block-2","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small slds-m-vertical_small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"vertical:small","size":"small","type":"vertical"}],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small slds-m-vertical_small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"vertical:small","size":"small","type":"vertical"}],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"block"},{"children":[{"class":"slds-col ","element":"childCardPreview","elementLabel":"Block-3-FlexCard-0","key":"element_element_block_3_0_childCardPreview_0_0","name":"FlexCard","parentElementKey":"element_block_3_0","property":{"cardName":"ESM_SelfService_AsyncStatus","cardNode":"","data-conditions":{"group":[{"field":"orderType","hasMergeField":false,"id":"state-new-condition-11","operator":"==","type":"custom","value":"bulk"}],"id":"state-condition-object","isParent":true},"isChildCardTrackingEnabled":false,"recordId":"{recordId}","selectedState":"Active"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"},{"class":"slds-col ","element":"childCardPreview","elementLabel":"Block-3-FlexCard-1","key":"element_element_block_3_0_childCardPreview_1_0","name":"FlexCard","parentElementKey":"element_block_3_0","property":{"cardName":"ESM_SelfService_ViewOrderItemContainer","cardNode":"","data-conditions":{"group":[{"field":"primaryOrderId","hasMergeField":false,"id":"state-new-condition-9","operator":"!=","type":"custom","value":"undefined"},{"group":[{"field":"orderType","hasMergeField":false,"id":"state-new-condition-13","operator":"==","type":"custom","value":"oneTime"},{"group":[{"field":"orderType","hasMergeField":false,"id":"state-new-condition-59","operator":"==","type":"custom","value":"bulk"},{"field":"isComplete","hasMergeField":false,"id":"state-new-condition-120","logicalOperator":"&&","operator":"==","type":"custom","value":"true"}],"id":"state-new-group-60","logicalOperator":"||"}],"id":"state-new-group-14","logicalOperator":"&&"}],"id":"state-condition-object","isParent":true},"data-preloadConditionalElement":false,"isChildCardTrackingEnabled":false,"parentAttribute":{"primaryOrderId":"{primaryOrderId}"},"recordId":"{recordId}","selectedState":"Active"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-3","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_small ","container":{"class":""},"elementStyleProperties":{},"height":"35em","inlineStyle":"overflow:auto; background: rgba(241, 241, 241, 0.34); border-radius: 0.5rem;","margin":[],"padding":[{"label":"around:small","size":"small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n     height:35em;    overflow:auto; background: rgba(241, 241, 241, 0.34); border-radius: 0.5rem;","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_small ","container":{"class":""},"elementStyleProperties":{},"height":"35em","inlineStyle":"overflow:auto; background: rgba(241, 241, 241, 0.34); border-radius: 0.5rem;","margin":[],"padding":[{"label":"around:small","size":"small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n     height:35em;    overflow:auto; background: rgba(241, 241, 241, 0.34); border-radius: 0.5rem;","text":{"align":"","color":""}}}],"type":"block"},{"children":[{"children":[{"class":"slds-col ","element":"action","elementLabel":"Block-4-Block-0-Action-0","key":"element_element_element_block_4_0_block_0_0_action_0_0","name":"Action","parentElementKey":"element_element_block_4_0_block_0_0","property":{"actionList":[{"actionIndex":0,"draggable":true,"isOpen":true,"isTrackingDisabled":true,"key":"1658466639347-txoqgjd5d","label":"Change To Order Page","stateAction":{"Community Named Page":{"targetName":"{Session.ChangeToOrderPage}"},"actionConditions":{"group":[],"id":"state-condition-object","isParent":true},"id":"flex-action-1659798977930","openUrlIn":"Current Window","targetType":"Community Named Page","type":"Custom"}}],"card":"{card}","flyoutDetails":{},"hideActionIcon":true,"iconName":"standard-default","label":"Previous","record":"{record}","showSpinner":"false","stateObj":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"background: #FFFFFF;\nborder: 1px solid #54504F;\nfont-family:var(--lwc-fontFamily);\ntext-transform:var(--lwc-textTransform);\nborder-radius: 105px;\nfont-style: normal;\nfont-weight: 700;\nfont-size: 14px;\nline-height: 30px;\ntext-align: center;","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         background: #FFFFFF;\nborder: 1px solid #54504F;\nfont-family:var(--lwc-fontFamily);\ntext-transform:var(--lwc-textTransform);\nborder-radius: 105px;\nfont-style: normal;\nfont-weight: 700;\nfont-size: 14px;\nline-height: 30px;\ntext-align: center;","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"background: #FFFFFF;\nborder: 1px solid #54504F;\nfont-family:var(--lwc-fontFamily);\ntext-transform:var(--lwc-textTransform);\nborder-radius: 105px;\nfont-style: normal;\nfont-weight: 700;\nfont-size: 14px;\nline-height: 30px;\ntext-align: center;","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         background: #FFFFFF;\nborder: 1px solid #54504F;\nfont-family:var(--lwc-fontFamily);\ntext-transform:var(--lwc-textTransform);\nborder-radius: 105px;\nfont-style: normal;\nfont-weight: 700;\nfont-size: 14px;\nline-height: 30px;\ntext-align: center;","text":{"align":"","color":""}}}],"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-4-Block-0","key":"element_element_block_4_0_block_0_0","name":"Block","parentElementKey":"element_block_4_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"1","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"block"},{"children":[],"class":"slds-col ","element":"block","elementLabel":"Block-4-Block-1","key":"element_element_block_4_0_block_1_0","name":"Block","parentElementKey":"element_block_4_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"10","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"10","isResponsive":false},"sizeClass":"slds-size_10-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"10","isResponsive":false},"sizeClass":"slds-size_10-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"block"},{"children":[{"class":"slds-col ","element":"action","elementLabel":"Block-4-Block-0-Action-0","key":"element_element_element_block_4_0_block_2_0_action_0_0","name":"Action","parentElementKey":"element_element_block_4_0_block_2_0","property":{"actionList":[{"actionIndex":0,"card":"{card}","draggable":false,"isOpen":true,"key":"1658472979547-qqq3u9fy8","label":"triggeremailsend","stateAction":{"actionConditions":{"group":[{"group":[{"field":"orderType","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"bulk"},{"field":"isComplete","hasMergeField":false,"id":"state-new-condition-18","logicalOperator":"&&","operator":"==","type":"custom","value":"true"}],"id":"state-new-group-1"},{"field":"orderType","hasMergeField":false,"id":"state-new-condition-40","logicalOperator":"||","operator":"==","type":"custom","value":"oneTime"}],"id":"state-condition-object","isParent":true},"displayName":"Action","eventName":"esm_selfservice_triggeremail","extraParams":{"WhatId":"{primaryOrderId}","emailTemplate":"ESM_SelfService_OrderConfirmation"},"hasExtraParams":true,"id":"flex-action-1660902513366","message":"ontriggeremail","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":"standard-default"}},{"actionIndex":2,"draggable":true,"isOpen":false,"isTrackingDisabled":true,"key":"1658466639347-txoqgjd5d","label":"To Confirm Order","stateAction":{"Community Named Page":{"targetName":"{Session.ConfirmOrderPage}"},"actionConditions":{"group":[{"group":[{"field":"orderType","hasMergeField":false,"id":"state-new-condition-135","operator":"==","type":"custom","value":"bulk"},{"field":"isComplete","hasMergeField":false,"id":"state-new-condition-153","logicalOperator":"&&","operator":"==","type":"custom","value":"true"}],"id":"state-new-group-136"},{"field":"orderType","hasMergeField":false,"id":"state-new-condition-175","logicalOperator":"||","operator":"==","type":"custom","value":"oneTime"}],"id":"state-condition-object","isParent":true},"id":"flex-action-1659542696826","openUrlIn":"Current Window","targetType":"Community Named Page","type":"Custom"}}],"card":"{card}","flyoutDetails":{},"hideActionIcon":true,"iconName":"standard-default","label":"Submit","record":"{record}","showSpinner":"false","stateObj":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"background: #C5C5C5;\nfont-family:var(--lwc-fontFamily);\ntext-transform:var(--lwc-textTransform);\nborder-radius: 105px;\nfont-style: normal;\nfont-weight: 700;\nfont-size: 14px;\nline-height: 30px;\ntext-align: center;\ncolor: #FFFFFF;\ncursor: not-allowed;","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         background: #C5C5C5;\nfont-family:var(--lwc-fontFamily);\ntext-transform:var(--lwc-textTransform);\nborder-radius: 105px;\nfont-style: normal;\nfont-weight: 700;\nfont-size: 14px;\nline-height: 30px;\ntext-align: center;\ncolor: #FFFFFF;\ncursor: not-allowed;","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"isSetForDesignTime":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"background: var(--lwc-colorBackgroundButtonBrand);\nfont-family:var(--lwc-fontFamily);\ntext-transform:var(--lwc-textTransform);\nborder-radius: 105px;\nfont-style: normal;\nfont-weight: 700;\nfont-size: 14px;\nline-height: 30px;\ntext-align: center;\ncolor: #FFFFFF;","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         background: var(--lwc-colorBackgroundButtonBrand);\nfont-family:var(--lwc-fontFamily);\ntext-transform:var(--lwc-textTransform);\nborder-radius: 105px;\nfont-style: normal;\nfont-weight: 700;\nfont-size: 14px;\nline-height: 30px;\ntext-align: center;\ncolor: #FFFFFF;","text":{"align":"","color":""}}},{"conditionString":"orderType == bulk && isComplete != true","conditions":{"group":[{"field":"orderType","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"bulk"},{"field":"isComplete","hasMergeField":false,"id":"state-new-condition-7","logicalOperator":"&&","operator":"!=","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"draggable":true,"isSetForDesignTime":true,"isopen":true,"key":1,"label":"DisabledNextButton","name":"DisabledNextButton","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"background: #C5C5C5;\nfont-family:var(--lwc-fontFamily);\ntext-transform:var(--lwc-textTransform);\nborder-radius: 105px;\nfont-style: normal;\nfont-weight: 700;\nfont-size: 14px;\nline-height: 30px;\ntext-align: center;\ncolor: #FFFFFF;\ncursor: not-allowed;","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         background: #C5C5C5;\nfont-family:var(--lwc-fontFamily);\ntext-transform:var(--lwc-textTransform);\nborder-radius: 105px;\nfont-style: normal;\nfont-weight: 700;\nfont-size: 14px;\nline-height: 30px;\ntext-align: center;\ncolor: #FFFFFF;\ncursor: not-allowed;","text":{"align":"","color":""}}}],"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-4-Block-0-clone-0","key":"element_element_block_4_0_block_2_0","name":"Block","parentElementKey":"element_block_4_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"1","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"block"}],"class":"slds-col ","element":"block","elementLabel":"Block-4","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"class":"slds-p-around_x-small","padding":[{"size":"x-small","type":"around"}],"sizeClass":"slds-size_12-of-12"},"type":"block"}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-horizontal_medium ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"horizontal:medium","size":"medium","type":"horizontal"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"ESM_SelfService_ViewOrder","Id":"a5aDo000001Jx6GIAO","vlocity_cmt__GlobalKey__c":"ESM_SelfService_ViewOrder/salesforce/21/1669464102534"};
  export default definition