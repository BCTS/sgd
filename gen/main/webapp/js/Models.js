
Ext.define("xcp_RootBO",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/xcp_RootBOs"
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_RootBO_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/xcp_RootBOs/template"
      },
      "fields" : [ {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_dm_folder",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_folders"
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "authors",
        "type" : "array"
      }, {
        "name" : "keywords",
        "type" : "array"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_folder_path",
        "type" : "array"
      }, {
        "name" : "r_link_cnt",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      }, "links" ]
    }
);

Ext.define("sgd_carpeta",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/sgd_carpetas"
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "authors",
        "type" : "array"
      }, {
        "name" : "keywords",
        "type" : "array"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_folder_path",
        "type" : "array"
      }, {
        "name" : "r_link_cnt",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      }, "links" ]
    }
);

Ext.define("sgd_expediente_sisged",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/sgd_expediente_sisgeds"
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "numero_expediente",
        "type" : "string"
      }, {
        "name" : "procedencia",
        "type" : "string"
      }, {
        "name" : "remitente",
        "type" : "string"
      }, {
        "name" : "tipo_identificacion",
        "type" : "string"
      }, {
        "name" : "numero_identificacion",
        "type" : "string"
      }, {
        "name" : "tipo_documento_origen",
        "type" : "string"
      }, {
        "name" : "numero_documento_origen",
        "type" : "string"
      }, {
        "name" : "fecha_documento_origen",
        "type" : "string"
      }, {
        "name" : "unidad_responsable",
        "type" : "string"
      }, {
        "name" : "ampliacion_asunto",
        "type" : "string"
      }, {
        "name" : "direccion",
        "type" : "string"
      }, {
        "name" : "departamento",
        "type" : "string"
      }, {
        "name" : "provincia",
        "type" : "string"
      }, {
        "name" : "distrito",
        "type" : "string"
      }, {
        "name" : "telefono",
        "type" : "string"
      }, {
        "name" : "fax",
        "type" : "string"
      }, {
        "name" : "email",
        "type" : "string"
      }, {
        "name" : "es_conforme",
        "useNull" : true,
        "type" : "boolean"
      }, {
        "name" : "es_confidencial",
        "useNull" : true,
        "type" : "boolean"
      }, {
        "name" : "inicia_pas",
        "useNull" : true,
        "type" : "boolean"
      }, {
        "name" : "authors",
        "type" : "array"
      }, {
        "name" : "keywords",
        "type" : "array"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_folder_path",
        "type" : "array"
      }, {
        "name" : "r_link_cnt",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      }, "links" ]
    }
);

Ext.define("xcp_folderlist_0",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "type" : "xcp_rest_folder",
        "url" : "application/xcp_dm_folders"
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "authors",
        "type" : "array"
      }, {
        "name" : "keywords",
        "type" : "array"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_folder_path",
        "type" : "array"
      }, {
        "name" : "r_link_cnt",
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      }, {
        "name" : "icon",
        "type" : "string"
      }, "links" ]
    }
);

Ext.define("xcp_dm_document",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_documents"
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "owner_name",
        "type" : "string"
      }, {
        "name" : "a_status",
        "type" : "string"
      }, {
        "name" : "a_content_type",
        "type" : "string"
      }, {
        "name" : "authors",
        "type" : "array"
      }, {
        "name" : "keywords",
        "type" : "array"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "name" : "i_chronicle_id",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      }, "links" ]
    }
);

Ext.define("xcp_currenttask",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "act_name",
        "type" : "string"
      }, {
        "name" : "qitem_id",
        "type" : "string"
      }, {
        "name" : "creation_date",
        "type" : "string"
      }, {
        "name" : "due_date",
        "type" : "string"
      }, {
        "name" : "performer",
        "type" : "string"
      }, {
        "name" : "performer_address",
        "type" : "string"
      }, {
        "name" : "priority",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "state",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "name",
        "type" : "string"
      }, {
        "name" : "task_subject",
        "type" : "string"
      }, {
        "name" : "queue_name",
        "type" : "string"
      }, {
        "name" : "instructions",
        "type" : "string"
      }, {
        "name" : "description",
        "type" : "string"
      }, {
        "name" : "received_date",
        "type" : "string"
      }, {
        "name" : "received_from",
        "type" : "string"
      }, {
        "name" : "requirements",
        "type" : "string"
      }, {
        "name" : "isdelegable",
        "useNull" : true,
        "type" : "boolean"
      }, {
        "name" : "isrepeatable",
        "useNull" : true,
        "type" : "boolean"
      } ]
    }
);

Ext.define("xcp_taskworkflow",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "correlation_identifier",
        "type" : "string"
      }, {
        "name" : "process_id",
        "type" : "string"
      }, {
        "name" : "r_creater_name",
        "type" : "string"
      }, {
        "name" : "r_start_date",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "r_runtime_state",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "supervisor_name",
        "type" : "string"
      }, {
        "name" : "supervisor_address",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_ExecutionData",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "currenttask",
        "type" : "xcp_currenttask"
      }, {
        "name" : "taskworkflow",
        "type" : "xcp_taskworkflow"
      } ]
    }
);

Ext.define("sgd_obtener_departement_initiate_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "departamento",
        "type" : "array"
      }, {
        "name" : "id_departamento",
        "type" : "array"
      } ]
    }
);

Ext.define("sgd_obtener_departement_initiate_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "sgd_obtener_departement_initiate_processVariables"
      } ]
    }
);

Ext.define("xcp_activity_list_initiate_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "act_name",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "output_activity_names",
        "type" : "array"
      }, {
        "name" : "port_type",
        "type" : "string"
      }, {
        "name" : "process_id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_activity_list_initiate_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_activity_list_initiate_processVariables"
      } ]
    }
);

Ext.define("xcp_user_from_queue_initiate_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "queue_name",
        "type" : "string"
      }, {
        "name" : "user_list",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_user_from_queue_initiate_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_user_from_queue_initiate_processVariables"
      } ]
    }
);

Ext.define("xcp_userorgroup_selecti_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "starts_with_filter",
        "type" : "string"
      }, {
        "name" : "user_group_name",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_userorgroup_selecti_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_userorgroup_selecti_processVariables"
      } ]
    }
);

Ext.define("xcp_taskhistory_initiate_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "activity_name",
        "type" : "array"
      }, {
        "name" : "date",
        "type" : "array"
      }, {
        "name" : "performer",
        "type" : "array"
      }, {
        "name" : "process_instance_id",
        "type" : "string"
      }, {
        "name" : "status",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_taskhistory_initiate_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_taskhistory_initiate_processVariables"
      } ]
    }
);

Ext.define("sgd_crear_expediente_si_initiate_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "ampliacion_asunto",
        "type" : "string"
      }, {
        "name" : "asunto",
        "type" : "string"
      }, {
        "name" : "conforme",
        "useNull" : true,
        "type" : "boolean"
      }, {
        "name" : "departamento",
        "type" : "string"
      }, {
        "name" : "direccion",
        "type" : "string"
      }, {
        "name" : "distrito",
        "type" : "string"
      }, {
        "name" : "email",
        "type" : "string"
      }, {
        "name" : "es_confidencial",
        "useNull" : true,
        "type" : "boolean"
      }, {
        "name" : "fax",
        "type" : "string"
      }, {
        "name" : "fecha_doc_origen",
        "type" : "string"
      }, {
        "name" : "inicia_pas",
        "useNull" : true,
        "type" : "boolean"
      }, {
        "name" : "numero_doc_origen",
        "type" : "string"
      }, {
        "name" : "numero_identificacion",
        "type" : "string"
      }, {
        "name" : "procedencia",
        "type" : "string"
      }, {
        "name" : "provincia",
        "type" : "string"
      }, {
        "name" : "remitente",
        "type" : "string"
      }, {
        "name" : "telefono",
        "type" : "string"
      }, {
        "name" : "tipo_doc_origen",
        "type" : "string"
      }, {
        "name" : "tipo_identificacion",
        "type" : "string"
      }, {
        "name" : "unidad_responsable",
        "type" : "string"
      } ]
    }
);

Ext.define("sgd_crear_expediente_si_initiate_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
            "inicia_pas" : "false",
            "es_confidencial" : "false",
            "conforme" : "false"
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "sgd_crear_expediente_si_initiate_processVariables"
      } ]
    }
);

Ext.define("sgd_obtener_distritos_p_initiate_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "distrito",
        "type" : "array"
      }, {
        "name" : "id_departamento",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "id_distrito",
        "type" : "array"
      }, {
        "name" : "id_provincia",
        "useNull" : true,
        "type" : "int"
      } ]
    }
);

Ext.define("sgd_obtener_distritos_p_initiate_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "sgd_obtener_distritos_p_initiate_processVariables"
      } ]
    }
);

Ext.define("xcp_queue_list_initiate_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "queuelist",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_queue_list_initiate_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_queue_list_initiate_processVariables"
      } ]
    }
);

Ext.define("sgd_obtener_provincias__initiate_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "id_departamento",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "id_provincia",
        "type" : "array"
      }, {
        "name" : "provincia",
        "type" : "array"
      } ]
    }
);

Ext.define("sgd_obtener_provincias__initiate_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "sgd_obtener_provincias__initiate_processVariables"
      } ]
    }
);

Ext.define("xcp_da_def_import_dm_document",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_documents",
        "extraParams" : {
          "type" : "xcp_da_def_import_dm_document"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "a_content_type",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_update_dm_document",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_documents",
        "extraParams" : {
          "type" : "xcp_da_def_update_dm_document"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_delete_dm_document",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_documents",
        "extraParams" : {
          "type" : "xcp_da_def_delete_dm_document"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_create_dm_folder",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_folders",
        "extraParams" : {
          "type" : "xcp_da_def_create_dm_folder"
        }
      },
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_update_dm_folder",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_folders",
        "extraParams" : {
          "type" : "xcp_da_def_update_dm_folder"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_delete_dm_folder",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_folders",
        "extraParams" : {
          "type" : "xcp_da_def_delete_dm_folder"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("sgd_da_def_create_carpeta",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/sgd_carpetas",
        "extraParams" : {
          "type" : "sgd_da_def_create_carpeta"
        }
      },
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      } ]
    }
);

Ext.define("sgd_da_def_update_carpeta",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/sgd_carpetas",
        "extraParams" : {
          "type" : "sgd_da_def_update_carpeta"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      } ]
    }
);

Ext.define("sgd_da_def_delete_carpeta",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/sgd_carpetas",
        "extraParams" : {
          "type" : "sgd_da_def_delete_carpeta"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("sgd_da_def_create_expediente_sisged",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/sgd_expediente_sisgeds",
        "extraParams" : {
          "type" : "sgd_da_def_create_expediente_sisged"
        }
      },
      "fields" : [ {
        "name" : "ampliacion_asunto",
        "type" : "string"
      }, {
        "name" : "departamento",
        "type" : "string"
      }, {
        "name" : "direccion",
        "type" : "string"
      }, {
        "name" : "distrito",
        "type" : "string"
      }, {
        "name" : "email",
        "type" : "string"
      }, {
        "name" : "es_confidencial",
        "type" : "boolean"
      }, {
        "name" : "es_conforme",
        "type" : "boolean"
      }, {
        "name" : "fax",
        "type" : "string"
      }, {
        "name" : "fecha_documento_origen",
        "type" : "string"
      }, {
        "name" : "inicia_pas",
        "type" : "boolean"
      }, {
        "name" : "numero_documento_origen",
        "type" : "string"
      }, {
        "name" : "numero_expediente",
        "type" : "string"
      }, {
        "name" : "numero_identificacion",
        "type" : "string"
      }, {
        "name" : "procedencia",
        "type" : "string"
      }, {
        "name" : "provincia",
        "type" : "string"
      }, {
        "name" : "remitente",
        "type" : "string"
      }, {
        "name" : "telefono",
        "type" : "string"
      }, {
        "name" : "tipo_documento_origen",
        "type" : "string"
      }, {
        "name" : "tipo_identificacion",
        "type" : "string"
      }, {
        "name" : "unidad_responsable",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      } ]
    }
);

Ext.define("sgd_da_def_update_expediente_sisged",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/sgd_expediente_sisgeds",
        "extraParams" : {
          "type" : "sgd_da_def_update_expediente_sisged"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "ampliacion_asunto",
        "type" : "string"
      }, {
        "name" : "departamento",
        "type" : "string"
      }, {
        "name" : "direccion",
        "type" : "string"
      }, {
        "name" : "distrito",
        "type" : "string"
      }, {
        "name" : "email",
        "type" : "string"
      }, {
        "name" : "es_confidencial",
        "type" : "boolean"
      }, {
        "name" : "es_conforme",
        "type" : "boolean"
      }, {
        "name" : "fax",
        "type" : "string"
      }, {
        "name" : "fecha_documento_origen",
        "type" : "string"
      }, {
        "name" : "inicia_pas",
        "type" : "boolean"
      }, {
        "name" : "numero_documento_origen",
        "type" : "string"
      }, {
        "name" : "numero_expediente",
        "type" : "string"
      }, {
        "name" : "numero_identificacion",
        "type" : "string"
      }, {
        "name" : "procedencia",
        "type" : "string"
      }, {
        "name" : "provincia",
        "type" : "string"
      }, {
        "name" : "remitente",
        "type" : "string"
      }, {
        "name" : "telefono",
        "type" : "string"
      }, {
        "name" : "tipo_documento_origen",
        "type" : "string"
      }, {
        "name" : "tipo_identificacion",
        "type" : "string"
      }, {
        "name" : "unidad_responsable",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      } ]
    }
);

Ext.define("sgd_da_def_delete_expediente_sisged",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/sgd_expediente_sisgeds",
        "extraParams" : {
          "type" : "sgd_da_def_delete_expediente_sisged"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_create_rootbo",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_RootBOs",
        "extraParams" : {
          "type" : "xcp_da_def_create_rootbo"
        }
      },
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_update_rootbo",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_RootBOs",
        "extraParams" : {
          "type" : "xcp_da_def_update_rootbo"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_delete_rootbo",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_RootBOs",
        "extraParams" : {
          "type" : "xcp_da_def_delete_rootbo"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_selector_rootbo",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_RootBOs",
        "extraParams" : {
          "type" : "xcp_da_def_selector_rootbo"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "selection",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("sgd_da_def_invoke_stateless_processcrear_expediente_si_initiate",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/sgd_crear_expediente_si",
        "extraParams" : {
          "type" : "stateless"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "ampliacion_asunto",
        "type" : "string"
      }, {
        "name" : "asunto",
        "type" : "string"
      }, {
        "name" : "conforme",
        "type" : "boolean"
      }, {
        "name" : "departamento",
        "type" : "string"
      }, {
        "name" : "direccion",
        "type" : "string"
      }, {
        "name" : "distrito",
        "type" : "string"
      }, {
        "name" : "email",
        "type" : "string"
      }, {
        "name" : "es_confidencial",
        "type" : "boolean"
      }, {
        "name" : "fax",
        "type" : "string"
      }, {
        "name" : "fecha_doc_origen",
        "type" : "string"
      }, {
        "name" : "inicia_pas",
        "type" : "boolean"
      }, {
        "name" : "numero_doc_origen",
        "type" : "string"
      }, {
        "name" : "numero_identificacion",
        "type" : "string"
      }, {
        "name" : "procedencia",
        "type" : "string"
      }, {
        "name" : "provincia",
        "type" : "string"
      }, {
        "name" : "remitente",
        "type" : "string"
      }, {
        "name" : "telefono",
        "type" : "string"
      }, {
        "name" : "tipo_doc_origen",
        "type" : "string"
      }, {
        "name" : "tipo_identificacion",
        "type" : "string"
      }, {
        "name" : "unidad_responsable",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("sgd_da_def_create_crear_expediente_si_initiate_expediente",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("sgd_da_def_create_crear_expediente_si_initiate_processPackages",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "expediente",
        "type" : "sgd_da_def_create_crear_expediente_si_initiate_expediente"
      } ]
    }
);

Ext.define("sgd_da_def_create_crear_expediente_si_initiate_processVariables",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "ampliacion_asunto",
        "type" : "string"
      }, {
        "name" : "asunto",
        "type" : "string"
      }, {
        "name" : "conforme",
        "type" : "boolean"
      }, {
        "name" : "departamento",
        "type" : "string"
      }, {
        "name" : "direccion",
        "type" : "string"
      }, {
        "name" : "distrito",
        "type" : "string"
      }, {
        "name" : "email",
        "type" : "string"
      }, {
        "name" : "es_confidencial",
        "type" : "boolean"
      }, {
        "name" : "fax",
        "type" : "string"
      }, {
        "name" : "fecha_doc_origen",
        "type" : "string"
      }, {
        "name" : "inicia_pas",
        "type" : "boolean"
      }, {
        "name" : "numero_doc_origen",
        "type" : "string"
      }, {
        "name" : "numero_identificacion",
        "type" : "string"
      }, {
        "name" : "procedencia",
        "type" : "string"
      }, {
        "name" : "provincia",
        "type" : "string"
      }, {
        "name" : "remitente",
        "type" : "string"
      }, {
        "name" : "telefono",
        "type" : "string"
      }, {
        "name" : "tipo_doc_origen",
        "type" : "string"
      }, {
        "name" : "tipo_identificacion",
        "type" : "string"
      }, {
        "name" : "unidad_responsable",
        "type" : "string"
      } ]
    }
);

Ext.define("sgd_da_def_create_crear_expediente_si_initiate",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/sgd_crear_expediente_si",
        "extraParams" : {
          "type" : "sgd_da_def_create_crear_expediente_si_initiate"
        }
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "sgd_da_def_create_crear_expediente_si_initiate_processVariables"
      }, {
        "name" : "processPackages",
        "type" : "sgd_da_def_create_crear_expediente_si_initiate_processPackages"
      }, {
        "name" : "attachments",
        "type" : "array"
      } ]
    }
);

Ext.define("sgd_da_def_create_obtener_provincias__initiate_processVariables",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "id_departamento",
        "type" : "int"
      }, {
        "name" : "id_provincia",
        "type" : "array"
      }, {
        "name" : "provincia",
        "type" : "array"
      } ]
    }
);

Ext.define("sgd_da_def_create_obtener_provincias__initiate",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/sgd_obtener_provincias_",
        "extraParams" : {
          "type" : "sgd_da_def_create_obtener_provincias__initiate"
        }
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "sgd_da_def_create_obtener_provincias__initiate_processVariables"
      }, {
        "name" : "attachments",
        "type" : "array"
      } ]
    }
);

Ext.define("sgd_da_def_create_obtener_departement_initiate_processVariables",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "departamento",
        "type" : "array"
      }, {
        "name" : "id_departamento",
        "type" : "array"
      } ]
    }
);

Ext.define("sgd_da_def_create_obtener_departement_initiate",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/sgd_obtener_departement",
        "extraParams" : {
          "type" : "sgd_da_def_create_obtener_departement_initiate"
        }
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "sgd_da_def_create_obtener_departement_initiate_processVariables"
      }, {
        "name" : "attachments",
        "type" : "array"
      } ]
    }
);

Ext.define("sgd_da_def_create_obtener_distritos_p_initiate_processVariables",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "distrito",
        "type" : "array"
      }, {
        "name" : "id_departamento",
        "type" : "int"
      }, {
        "name" : "id_distrito",
        "type" : "array"
      }, {
        "name" : "id_provincia",
        "type" : "int"
      } ]
    }
);

Ext.define("sgd_da_def_create_obtener_distritos_p_initiate",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/sgd_obtener_distritos_p",
        "extraParams" : {
          "type" : "sgd_da_def_create_obtener_distritos_p_initiate"
        }
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "sgd_da_def_create_obtener_distritos_p_initiate_processVariables"
      }, {
        "name" : "attachments",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_versionHistoryQuery_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/sysobject",
        "extraParams" : {
          "type" : "versionHistoryQuery"
        }
      },
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_networklocation_selecti_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/networkLocations",
        "extraParams" : {
          "type" : "xcp_networklocation_selecti_ds"
        }
      },
      "fields" : [ {
        "name" : "location_id",
        "type" : "string"
      }, {
        "name" : "location_name",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_attachment_viewer_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "pplication/xcp_dm_documents",
        "extraParams" : {
          "type" : "xcp_attachment_viewer_ds"
        }
      },
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "a_content_type",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_folder_rt_query_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_folders",
        "extraParams" : {
          "type" : "xcp_folder_rt_query"
        }
      },
      "fields" : [ {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_content_rt_query_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_documents",
        "extraParams" : {
          "type" : "xcp_content_rt_query"
        }
      },
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "a_content_type",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("sgd_buscar_sisged_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/sgd_expediente_sisgeds",
        "extraParams" : {
          "type" : "sgd_buscar_sisged"
        }
      },
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "numero_expediente",
        "type" : "string"
      }, {
        "name" : "remitente",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "unidad_responsable",
        "type" : "string"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "tipo_documento_origen",
        "type" : "string"
      }, {
        "name" : "numero_documento_origen",
        "type" : "string"
      }, {
        "name" : "fecha_documento_origen",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "summary",
        "type" : "string"
      }, {
        "name" : "matchingterms",
        "type" : "array"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_folderQuery_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/sysobject",
        "extraParams" : {
          "type" : "folderQuery"
        }
      },
      "fields" : [ {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "icon",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_link_cnt",
        "type" : "int"
      }, {
        "name" : "a_content_type",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_activity_list_initiate_staless_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_activity_list_initiate",
        "extraParams" : {
          "type" : "xcp_activity_list_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "output_activity_names",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_user_from_queue_initiate_staless_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_user_from_queue_initiate",
        "extraParams" : {
          "type" : "xcp_user_from_queue_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "user_list",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_queue_list_initiate_staless_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_queue_list_initiate",
        "extraParams" : {
          "type" : "xcp_queue_list_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "queuelist",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_userorgroup_selecti_staless_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_userorgroup_selecti",
        "extraParams" : {
          "type" : "xcp_userorgroup_selecti_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "user_group_name",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_taskhistory_initiate_staless_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_taskhistory_initiate",
        "extraParams" : {
          "type" : "xcp_taskhistory_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "activity_name",
        "type" : "string"
      }, {
        "name" : "date",
        "type" : "string"
      }, {
        "name" : "performer",
        "type" : "string"
      }, {
        "name" : "status",
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("sgd_obtener_provincias__initiate_staless_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/sgd_obtener_provincias__initiate",
        "extraParams" : {
          "type" : "sgd_obtener_provincias__initiate_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "id_provincia",
        "type" : "int"
      }, {
        "name" : "provincia",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("sgd_obtener_departement_initiate_staless_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/sgd_obtener_departement_initiate",
        "extraParams" : {
          "type" : "sgd_obtener_departement_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "departamento",
        "type" : "string"
      }, {
        "name" : "id_departamento",
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("sgd_obtener_distritos_p_initiate_staless_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/sgd_obtener_distritos_p_initiate",
        "extraParams" : {
          "type" : "sgd_obtener_distritos_p_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "distrito",
        "type" : "string"
      }, {
        "name" : "id_distrito",
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_dm_folder_base_folder_model",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "api" : {
          "read" : "application/xcp_dm_folders/template"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_folders",
        "extraParams" : {
          "type" : "xcp_da_def_create_dm_folder"
        }
      },
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "folder_id",
        "type" : "string"
      } ]
    }
);

Ext.define("roles",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "rest",
        "url" : "application/roles"
      },
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "name",
        "type" : "string"
      }, {
        "name" : "description",
        "type" : "string"
      }, {
        "name" : "namespace",
        "type" : "string"
      } ]
    }
);

Ext.define("role",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "type" : "json"
        },
        "type" : "rest",
        "url" : "application/role"
      },
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "name",
        "type" : "string"
      }, {
        "name" : "description",
        "type" : "string"
      }, {
        "name" : "namespace",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp.data.model.UserPreferences",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/currentUser/preferences",
        "extraParams" : {
          "fields" : "workflowAutoNextTask,role,delegate_task,delegateToUser,networkLocation"
        }
      },
      "fields" : [ {
        "name" : "workflowAutoNextTask",
        "type" : "string"
      }, {
        "name" : "role",
        "type" : "string"
      }, {
        "name" : "delegate_task",
        "type" : "string"
      }, {
        "name" : "delegateToUser",
        "type" : "string"
      }, {
        "name" : "networkLocation",
        "type" : "string"
      } ]
    }
);
