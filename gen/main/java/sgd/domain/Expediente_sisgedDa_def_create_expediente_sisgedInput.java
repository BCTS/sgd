package sgd.domain;

import com.emc.xcp.persistence.annotation.CustomAttribute;
import com.emc.xcp.persistence.annotation.FolderId;
import com.emc.xcp.persistence.annotation.PersistentAttribute;
import com.emc.xcp.persistence.annotation.PersistentId;
import com.emc.xcp.persistence.annotation.PersistentObject;
import com.emc.xcp.services.core.annotation.Linked;
import com.emc.xcp.services.framework.domain.LinkSource;
import java.util.Date;
import java.util.List;
import java.util.Map;
import org.codehaus.jackson.annotate.JsonIgnore;
import org.codehaus.jackson.annotate.JsonProperty;
import org.codehaus.jackson.annotate.JsonPropertyOrder;


@PersistentObject(type = "sgd_expediente_sisged")
@Linked(template = "/application/sgd_expediente_sisgeds")
@JsonPropertyOrder(alphabetic = true)
public class Expediente_sisgedDa_def_create_expediente_sisgedInput {

    @PersistentId
    @PersistentAttribute(name = "r_object_id")
    @Linked
    private String id;

    @CustomAttribute(id = "effectivePermissionsHandler")
    private List<String> effectivePermissions;

    @PersistentAttribute(name = "ampliacion_asunto")
    private String ampliacion_asunto;

    @PersistentAttribute(name = "departamento")
    private String departamento;

    @PersistentAttribute(name = "direccion")
    private String direccion;

    @PersistentAttribute(name = "distrito")
    private String distrito;

    @PersistentAttribute(name = "email")
    private String email;

    @PersistentAttribute(name = "es_confidencial")
    private Boolean es_confidencial;

    @PersistentAttribute(name = "es_conforme")
    private Boolean es_conforme;

    @PersistentAttribute(name = "fax")
    private String fax;

    @PersistentAttribute(name = "fecha_documento_origen")
    private Date fecha_documento_origen;

    @PersistentAttribute(name = "inicia_pas")
    private Boolean inicia_pas;

    @PersistentAttribute(name = "numero_documento_origen")
    private String numero_documento_origen;

    @PersistentAttribute(name = "numero_expediente")
    private String numero_expediente;

    @PersistentAttribute(name = "numero_identificacion")
    private String numero_identificacion;

    @PersistentAttribute(name = "procedencia")
    private String procedencia;

    @PersistentAttribute(name = "provincia")
    private String provincia;

    @PersistentAttribute(name = "remitente")
    private String remitente;

    @PersistentAttribute(name = "telefono")
    private String telefono;

    @PersistentAttribute(name = "tipo_documento_origen")
    private String tipo_documento_origen;

    @PersistentAttribute(name = "tipo_identificacion")
    private String tipo_identificacion;

    @PersistentAttribute(name = "unidad_responsable")
    private String unidad_responsable;

    @PersistentAttribute(name = "object_name")
    private String object_name;

    @PersistentAttribute(name = "subject")
    private String subject;

    @PersistentAttribute(name = "title")
    private String title;

    @FolderId
    private String folder_id;

    public String getId(){
        return id;
    }

    public void setId(String id){
        this.id = id;
    }

    public List<String> getEffectivePermissions(){
        return effectivePermissions;
    }

    public void setEffectivePermissions(List<String> effectivePermissions){
        this.effectivePermissions = effectivePermissions;
    }

    public String getAmpliacion_asunto(){
        return ampliacion_asunto;
    }

    public void setAmpliacion_asunto(String ampliacion_asunto){
        this.ampliacion_asunto = ampliacion_asunto;
    }

    public String getDepartamento(){
        return departamento;
    }

    public void setDepartamento(String departamento){
        this.departamento = departamento;
    }

    public String getDireccion(){
        return direccion;
    }

    public void setDireccion(String direccion){
        this.direccion = direccion;
    }

    public String getDistrito(){
        return distrito;
    }

    public void setDistrito(String distrito){
        this.distrito = distrito;
    }

    public String getEmail(){
        return email;
    }

    public void setEmail(String email){
        this.email = email;
    }

    public Boolean getEs_confidencial(){
        return es_confidencial;
    }

    public void setEs_confidencial(Boolean es_confidencial){
        this.es_confidencial = es_confidencial;
    }

    public Boolean getEs_conforme(){
        return es_conforme;
    }

    public void setEs_conforme(Boolean es_conforme){
        this.es_conforme = es_conforme;
    }

    public String getFax(){
        return fax;
    }

    public void setFax(String fax){
        this.fax = fax;
    }

    public Date getFecha_documento_origen(){
        return fecha_documento_origen;
    }

    public void setFecha_documento_origen(Date fecha_documento_origen){
        this.fecha_documento_origen = fecha_documento_origen;
    }

    public Boolean getInicia_pas(){
        return inicia_pas;
    }

    public void setInicia_pas(Boolean inicia_pas){
        this.inicia_pas = inicia_pas;
    }

    public String getNumero_documento_origen(){
        return numero_documento_origen;
    }

    public void setNumero_documento_origen(String numero_documento_origen){
        this.numero_documento_origen = numero_documento_origen;
    }

    public String getNumero_expediente(){
        return numero_expediente;
    }

    public void setNumero_expediente(String numero_expediente){
        this.numero_expediente = numero_expediente;
    }

    public String getNumero_identificacion(){
        return numero_identificacion;
    }

    public void setNumero_identificacion(String numero_identificacion){
        this.numero_identificacion = numero_identificacion;
    }

    public String getProcedencia(){
        return procedencia;
    }

    public void setProcedencia(String procedencia){
        this.procedencia = procedencia;
    }

    public String getProvincia(){
        return provincia;
    }

    public void setProvincia(String provincia){
        this.provincia = provincia;
    }

    public String getRemitente(){
        return remitente;
    }

    public void setRemitente(String remitente){
        this.remitente = remitente;
    }

    public String getTelefono(){
        return telefono;
    }

    public void setTelefono(String telefono){
        this.telefono = telefono;
    }

    public String getTipo_documento_origen(){
        return tipo_documento_origen;
    }

    public void setTipo_documento_origen(String tipo_documento_origen){
        this.tipo_documento_origen = tipo_documento_origen;
    }

    public String getTipo_identificacion(){
        return tipo_identificacion;
    }

    public void setTipo_identificacion(String tipo_identificacion){
        this.tipo_identificacion = tipo_identificacion;
    }

    public String getUnidad_responsable(){
        return unidad_responsable;
    }

    public void setUnidad_responsable(String unidad_responsable){
        this.unidad_responsable = unidad_responsable;
    }

    public String getObject_name(){
        return object_name;
    }

    public void setObject_name(String object_name){
        this.object_name = object_name;
    }

    public String getSubject(){
        return subject;
    }

    public void setSubject(String subject){
        this.subject = subject;
    }

    public String getTitle(){
        return title;
    }

    public void setTitle(String title){
        this.title = title;
    }

    public String getFolder_id(){
        return folder_id;
    }

    public void setFolder_id(String folder_id){
        this.folder_id = folder_id;
    }

    @JsonProperty
    public Map<String, java.lang.Object> getLinks(){
        return LinkSource.getLinks(this);
    }

    @JsonIgnore
    public void setLinks(Map<String,  java.lang.Object> linkSource){
    }
}