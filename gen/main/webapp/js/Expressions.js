/*
 * Copyright (c) 2011. EMC Corporation. All Rights Reserved.
 */

// Expressions.js

Ext.namespace("xcp");

Ext.define("Expression.IdFromContext",
{
	alias : 'expression.id_from_context',

	statics : {
		evaluate : function () {
			return xcp.navigationManager.currentNavigationContext.objectId;
		}
	}

});

Ext.define("xcp.expression.Generated",{
extend:"xcp.core.expr.BaseExpression",
singleton:true});

xcp.expression.Generated.assign_task_da_id_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'xcp_assign_task','Inputs.id'); }

xcp.expression.Generated.assign_task_da_userName_1 = function (context) { return this.getValueFromWidget(context,'dropdown_list','value'); }

xcp.expression.Generated.attachment_sel_da_selection_1 = function (context) { return this.getValueFromSelectionModel(context,'results_list','id'); }

xcp.expression.Generated.changeworkqueue_da_id_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'xcp_changeworkqueue','Inputs.id'); }

xcp.expression.Generated.changeworkqueue_da_queueName_1 = function (context) { return this.getValueFromWidget(context,'queue_dropdown_list','value'); }

xcp.expression.Generated.hold_task_da_holdUntil_1 = function (context) { return this.getValueFromWidget(context,'hold_until','value'); }

xcp.expression.Generated.hold_task_da_id_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'xcp_hold_task','Inputs.id'); }

xcp.expression.Generated.reassign_task_da_id_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'xcp_reassign_task','Inputs.id'); }

xcp.expression.Generated.reassign_task_da_userName_1 = function (context) { return this.getValueFromWidget(context,'dropdown_list','value'); }

xcp.expression.Generated.selector_content_da_selection_1 = function (context) { return this.getValueFromSelectionModel(context,'results_list','id'); }

xcp.expression.Generated.selector_folder_da_selection_1 = function (context) { return this.getValueFromSelectionModel(context,'results_list','id'); }

xcp.expression.Generated.sgd_attachment_step_folderQuery_1_folder_id_1 = function (context) { return xcp.widget.ContentTree.getSelectedNodeId(context,'content_tree'); }

xcp.expression.Generated.sgd_busqueda_expediente_buscar_sisged_input_numero_expediente_1 = function (context) { return this.getValueFromWidget(context,'text_input1','value'); }

xcp.expression.Generated.sgd_busqueda_expediente_buscar_sisged_q_1 = function (context) { return this.getValueFromWidget(context,'text_input','value'); }

xcp.expression.Generated.sgd_crear_expediente_da_def_invoke_stateless_processcrear_expediente_si_initiate_ampliacion_asunto_1 = function (context) { return this.getValueFromWidget(context,'amp_asunto','value'); }

xcp.expression.Generated.sgd_crear_expediente_da_def_invoke_stateless_processcrear_expediente_si_initiate_asunto_1 = function (context) { return this.getValueFromWidget(context,'asunto','value'); }

xcp.expression.Generated.sgd_crear_expediente_da_def_invoke_stateless_processcrear_expediente_si_initiate_conforme_1 = function (context) { return this.getValueFromWidget(context,'docs_conformes','value'); }

xcp.expression.Generated.sgd_crear_expediente_da_def_invoke_stateless_processcrear_expediente_si_initiate_departamento_1 = function (context) { return xcp.util.mixin.DropdownMixin.getLabel(context,'departamento'); }

xcp.expression.Generated.sgd_crear_expediente_da_def_invoke_stateless_processcrear_expediente_si_initiate_direccion_1 = function (context) { return this.getValueFromWidget(context,'direccion','value'); }

xcp.expression.Generated.sgd_crear_expediente_da_def_invoke_stateless_processcrear_expediente_si_initiate_distrito_1 = function (context) { return xcp.util.mixin.DropdownMixin.getLabel(context,'distrito'); }

xcp.expression.Generated.sgd_crear_expediente_da_def_invoke_stateless_processcrear_expediente_si_initiate_email_1 = function (context) { return this.getValueFromWidget(context,'email','value'); }

xcp.expression.Generated.sgd_crear_expediente_da_def_invoke_stateless_processcrear_expediente_si_initiate_es_confidencial_1 = function (context) { return this.getValueFromWidget(context,'es_confidencial','value'); }

xcp.expression.Generated.sgd_crear_expediente_da_def_invoke_stateless_processcrear_expediente_si_initiate_fax_1 = function (context) { return this.getValueFromWidget(context,'fax','value'); }

xcp.expression.Generated.sgd_crear_expediente_da_def_invoke_stateless_processcrear_expediente_si_initiate_fecha_doc_origen_1 = function (context) { return this.getValueFromWidget(context,'fecha_doc_origen','value'); }

xcp.expression.Generated.sgd_crear_expediente_da_def_invoke_stateless_processcrear_expediente_si_initiate_inicia_pas_1 = function (context) { return this.getValueFromWidget(context,'inicia_pas','value'); }

xcp.expression.Generated.sgd_crear_expediente_da_def_invoke_stateless_processcrear_expediente_si_initiate_numero_doc_origen_1 = function (context) { return this.getValueFromWidget(context,'numero_doc_origen','value'); }

xcp.expression.Generated.sgd_crear_expediente_da_def_invoke_stateless_processcrear_expediente_si_initiate_numero_identificacion_1 = function (context) { return this.getValueFromWidget(context,'numero_doc_identidad','value'); }

xcp.expression.Generated.sgd_crear_expediente_da_def_invoke_stateless_processcrear_expediente_si_initiate_procedencia_1 = function (context) { return this.getValueFromWidget(context,'procedencia','value'); }

xcp.expression.Generated.sgd_crear_expediente_da_def_invoke_stateless_processcrear_expediente_si_initiate_provincia_1 = function (context) { return xcp.util.mixin.DropdownMixin.getLabel(context,'provincia'); }

xcp.expression.Generated.sgd_crear_expediente_da_def_invoke_stateless_processcrear_expediente_si_initiate_remitente_1 = function (context) { return this.getValueFromWidget(context,'remitente','value'); }

xcp.expression.Generated.sgd_crear_expediente_da_def_invoke_stateless_processcrear_expediente_si_initiate_telefono_1 = function (context) { return this.getValueFromWidget(context,'telefono','value'); }

xcp.expression.Generated.sgd_crear_expediente_da_def_invoke_stateless_processcrear_expediente_si_initiate_tipo_doc_origen_1 = function (context) { return this.getValueFromWidget(context,'tipo_doc_origen','value'); }

xcp.expression.Generated.sgd_crear_expediente_da_def_invoke_stateless_processcrear_expediente_si_initiate_tipo_identificacion_1 = function (context) { return this.getValueFromWidget(context,'tipo_identificacion','value'); }

xcp.expression.Generated.sgd_crear_expediente_da_def_invoke_stateless_processcrear_expediente_si_initiate_unidad_responsable_1 = function (context) { return this.getValueFromWidget(context,'unidad_responsable','value'); }

xcp.expression.Generated.sgd_crear_expediente_obtener_distritos_p_initiate_staless_ds_id_departamento_1 = function (context) { return this.getValueFromWidget(context,'departamento','value'); }

xcp.expression.Generated.sgd_crear_expediente_obtener_distritos_p_initiate_staless_ds_id_provincia_1 = function (context) { return this.getValueFromWidget(context,'provincia','value'); }

xcp.expression.Generated.sgd_crear_expediente_obtener_provincias__initiate_staless_ds_id_departamento_1 = function (context) { return this.getValueFromWidget(context,'departamento','value'); }

xcp.expression.Generated.sgd_edit_base_content_comments_objectId_1 = function (context) { return this.getValueFromModel(context,'xcp_dm_document','id'); }

xcp.expression.Generated.sgd_edit_base_content_da_def_update_dm_document_id_1 = function (context) { return this.getValueFromModel(context,'xcp_dm_document','id'); }

xcp.expression.Generated.sgd_edit_base_content_da_def_update_dm_document_object_name_1 = function (context) { return this.getValueFromWidget(context,'object_name','value'); }

xcp.expression.Generated.sgd_edit_base_content_r_lock_owner_hidden_1 = function (context) { return xcp.functions.length(this.getValueFromModel(context,'xcp_dm_document','r_lock_owner')) == 0; }

xcp.expression.Generated.sgd_edit_base_content_r_lock_owner_value_1 = function (context) { return xcp.functions.lockStatus(this.getValueFromModel(context,'xcp_dm_document','r_lock_date'), this.getValueFromModel(context,'xcp_dm_document','r_lock_owner')); }

xcp.expression.Generated.sgd_edit_base_content_viewer_contentType_1 = function (context) { return this.getValueFromModel(context,'xcp_dm_document','a_content_type'); }

xcp.expression.Generated.sgd_edit_base_content_viewer_objectId_1 = function (context) { return this.getValueFromModel(context,'xcp_dm_document','id'); }

xcp.expression.Generated.sgd_edit_base_folder_da_def_update_dm_folder_id_1 = function (context) { return this.getValueFromModel(context,'xcp_dm_folder','id'); }

xcp.expression.Generated.sgd_edit_base_folder_da_def_update_dm_folder_object_name_1 = function (context) { return this.getValueFromWidget(context,'object_name','value'); }

xcp.expression.Generated.sgd_forward_activity_activity_list_initiate_staless_ds_1_id_1 = function (context) { return xcp.functions.internal.getValueFromActionFlowInputModel('id'); }

xcp.expression.Generated.sgd_forward_activity_activity_list_initiate_staless_ds_1_port_type_1 = function (context) { return 'INPUT'; }

xcp.expression.Generated.sgd_forward_activity_multi_activity_list_initiate_staless_ds_1_id_1 = function (context) { return xcp.functions.internal.getValueFromActionFlowInputModel('id'); }

xcp.expression.Generated.sgd_forward_activity_multi_activity_list_initiate_staless_ds_1_port_type_1 = function (context) { return 'INPUT'; }

xcp.expression.Generated.sgd_reject_activity_activity_list_initiate_staless_ds_1_id_1 = function (context) { return xcp.functions.internal.getValueFromActionFlowInputModel('id'); }

xcp.expression.Generated.sgd_reject_activity_activity_list_initiate_staless_ds_1_port_type_1 = function (context) { return 'REVERT'; }

xcp.expression.Generated.sgd_reject_activity_multi_activity_list_initiate_staless_ds_1_id_1 = function (context) { return xcp.functions.internal.getValueFromActionFlowInputModel('id'); }

xcp.expression.Generated.sgd_reject_activity_multi_activity_list_initiate_staless_ds_1_port_type_1 = function (context) { return 'REVERT'; }

xcp.expression.Generated.sgd_selector_content_st_content_rt_query_input_contenttype_1 = function (context) { return xcp.functions.internal.getValueFromActionFlowInputModel('contenttype'); }

xcp.expression.Generated.sgd_selector_content_st_content_rt_query_input_name_1 = function (context) { return this.getValueFromWidget(context,'text_input','value'); }

xcp.expression.Generated.sgd_selector_folder_ste_folder_rt_query_1_input_folder_id_1 = function (context) { return this.getValueFromWidget(context,'text_input','value'); }

xcp.expression.Generated.sgd_signoff_forward_multi_activity_list_initiate_staless_ds_1_id_1 = function (context) { return xcp.functions.internal.getValueFromActionFlowInputModel('id'); }

xcp.expression.Generated.sgd_signoff_forward_multi_activity_list_initiate_staless_ds_1_port_type_1 = function (context) { return 'INPUT'; }

xcp.expression.Generated.sgd_signoff_forward_one_activity_list_initiate_staless_ds_1_id_1 = function (context) { return xcp.functions.internal.getValueFromActionFlowInputModel('id'); }

xcp.expression.Generated.sgd_signoff_forward_one_activity_list_initiate_staless_ds_1_port_type_1 = function (context) { return 'INPUT'; }

xcp.expression.Generated.sgd_signoff_reject_multi_activity_list_initiate_staless_ds_1_id_1 = function (context) { return xcp.functions.internal.getValueFromActionFlowInputModel('id'); }

xcp.expression.Generated.sgd_signoff_reject_multi_activity_list_initiate_staless_ds_1_port_type_1 = function (context) { return 'REVERT'; }

xcp.expression.Generated.sgd_signoff_reject_one_activity_list_initiate_staless_ds_1_id_1 = function (context) { return xcp.functions.internal.getValueFromActionFlowInputModel('id'); }

xcp.expression.Generated.sgd_signoff_reject_one_activity_list_initiate_staless_ds_1_port_type_1 = function (context) { return 'REVERT'; }

xcp.expression.Generated.sgd_signoff_usergroup_multi_userorgroup_selecti_staless_ds_1_starts_with_filter_1 = function (context) { return this.getValueFromWidget(context,'text_input','value'); }

xcp.expression.Generated.sgd_signoff_usergroup_userorgroup_selecti_staless_ds_1_starts_with_filter_1 = function (context) { return this.getValueFromWidget(context,'text_input','value'); }

xcp.expression.Generated.sgd_user_from_queue_user_from_queue_initiate_staless_ds_1_id_1 = function (context) { return xcp.functions.internal.getValueFromActionFlowInputModel('id'); }

xcp.expression.Generated.sgd_user_preferences_column_box3_hidden_1 = function (context) { return this.getValueFromWidget(context,'delegate_task','value') != true; }

xcp.expression.Generated.sgd_user_preferences_delegateToUser_disabled_1 = function (context) { return this.getValueFromWidget(context,'delegate_task','value') != true; }

xcp.expression.Generated.sgd_user_preferences_delegateToUser_hidden_1 = function (context) { return this.getValueFromWidget(context,'delegate_task','value') != true; }

xcp.expression.Generated.sgd_usergroup_selection_multi_userorgroup_selecti_staless_ds_1_starts_with_filter_1 = function (context) { return this.getValueFromWidget(context,'text_input','value'); }

xcp.expression.Generated.sgd_usergroup_selection_userorgroup_selecti_staless_ds_1_starts_with_filter_1 = function (context) { return this.getValueFromWidget(context,'text_input','value'); }

xcp.expression.Generated.sgd_ver_expediente_sisg_folderQuery_folder_id_1 = function (context) { return this.getValueFromModel(context,'sgd_expediente_sisged','id'); }

xcp.expression.Generated.sgd_ver_expediente_sisg_folder_view_root_1 = function (context) { return this.getValueFromModel(context,'sgd_expediente_sisged','id'); }

xcp.expression.Generated.sgd_view_base_content_comments_objectId_1 = function (context) { return this.getValueFromModel(context,'xcp_dm_document','id'); }

xcp.expression.Generated.sgd_view_base_content_da_def_delete_dm_document_id_1 = function (context) { return this.getValueFromModel(context,'xcp_dm_document','id'); }

xcp.expression.Generated.sgd_view_base_content_r_lock_owner_hidden_1 = function (context) { return xcp.functions.length(this.getValueFromModel(context,'xcp_dm_document','r_lock_owner')) == 0; }

xcp.expression.Generated.sgd_view_base_content_r_lock_owner_value_1 = function (context) { return xcp.functions.lockStatus(this.getValueFromModel(context,'xcp_dm_document','r_lock_date'), this.getValueFromModel(context,'xcp_dm_document','r_lock_owner')); }

xcp.expression.Generated.sgd_view_base_content_viewer_contentType_1 = function (context) { return this.getValueFromModel(context,'xcp_dm_document','a_content_type'); }

xcp.expression.Generated.sgd_view_base_content_viewer_objectId_1 = function (context) { return this.getValueFromModel(context,'xcp_dm_document','id'); }

xcp.expression.Generated.sgd_view_base_folder_da_def_delete_dm_folder_id_1 = function (context) { return this.getValueFromModel(context,'xcp_dm_folder','id'); }

xcp.expression.Generated.sgd_view_base_folder_folderQuery_folder_id_1 = function (context) { return this.getValueFromModel(context,'xcp_dm_folder','id'); }

xcp.expression.Generated.update_preferences_update_delegateToUser = function (context) { return this.getValueFromWidget(context,'delegateToUser','value'); }

xcp.expression.Generated.update_preferences_update_delegate_task = function (context) { return this.getValueFromWidget(context,'delegate_task','value'); }

xcp.expression.Generated.update_preferences_update_networkLocation = function (context) { return this.getValueFromWidget(context,'networkLocation','value'); }

xcp.expression.Generated.update_preferences_update_role = function (context) { return this.getValueFromWidget(context,'role','value'); }

xcp.expression.Generated.update_preferences_update_workflowAutoNextTask = function (context) { return this.getValueFromWidget(context,'workflowAutoNextTask','value'); }

xcp.expression.Generated.xcp_attachment_step_content_tree_folderRoot_1 = function (context) { return xcp.functions.internal.getValueFromActionFlowInputModel('folderRoot'); }

xcp.expression.Generated.xcp_hold_task_hold_until_value_1 = function (context) { return xcp.functions.addDays(xcp.functions.today(), 1); }

