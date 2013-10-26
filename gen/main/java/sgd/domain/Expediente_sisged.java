package sgd.domain;

import com.emc.xcp.persistence.annotation.CustomAttribute;
import com.emc.xcp.persistence.annotation.PersistentAttribute;
import com.emc.xcp.persistence.annotation.PersistentId;
import com.emc.xcp.persistence.annotation.PersistentObject;
import com.emc.xcp.services.core.annotation.Linked;
import com.emc.xcp.services.framework.domain.LinkSource;
import java.util.Date;
import java.util.List;
import java.util.Map;
import javax.persistence.ElementCollection;
import org.codehaus.jackson.annotate.JsonIgnore;
import org.codehaus.jackson.annotate.JsonProperty;
import org.codehaus.jackson.annotate.JsonPropertyOrder;


@PersistentObject(superType = "dm_folder", type = "sgd_expediente_sisged")
@Linked(template = "/application/sgd_expediente_sisgeds")
@JsonPropertyOrder(alphabetic = true)
public class Expediente_sisged {

    @PersistentId
    @PersistentAttribute(name = "r_object_id")
    @Linked
    private String id;

    @CustomAttribute(id = "effectivePermissionsHandler")
    private List<String> effectivePermissions;

    @PersistentAttribute(name = "numero_expediente")
    private String numero_expediente;

    @PersistentAttribute(name = "procedencia")
    private String procedencia;

    @PersistentAttribute(name = "remitente")
    private String remitente;

    @PersistentAttribute(name = "tipo_identificacion")
    private String tipo_identificacion;

    @PersistentAttribute(name = "numero_identificacion")
    private String numero_identificacion;

    @PersistentAttribute(name = "tipo_documento_origen")
    private String tipo_documento_origen;

    @PersistentAttribute(name = "numero_documento_origen")
    private String numero_documento_origen;

    @PersistentAttribute(name = "fecha_documento_origen")
    private Date fecha_documento_origen;

    @PersistentAttribute(name = "unidad_responsable")
    private String unidad_responsable;

    @PersistentAttribute(name = "ampliacion_asunto")
    private String ampliacion_asunto;

    @PersistentAttribute(name = "direccion")
    private String direccion;

    @PersistentAttribute(name = "departamento")
    private String departamento;

    @PersistentAttribute(name = "provincia")
    private String provincia;

    @PersistentAttribute(name = "distrito")
    private String distrito;

    @PersistentAttribute(name = "telefono")
    private String telefono;

    @PersistentAttribute(name = "fax")
    private String fax;

    @PersistentAttribute(name = "email")
    private String email;

    @PersistentAttribute(name = "es_conforme")
    private Boolean es_conforme;

    @PersistentAttribute(name = "es_confidencial")
    private Boolean es_confidencial;

    @PersistentAttribute(name = "inicia_pas")
    private Boolean inicia_pas;

    @PersistentAttribute(name = "authors")
    @ElementCollection(targetClass = String.class)
    private List<String> authors;

    @PersistentAttribute(name = "keywords")
    @ElementCollection(targetClass = String.class)
    private List<String> keywords;

    @PersistentAttribute(name = "subject")
    private String subject;

    @PersistentAttribute(name = "title")
    private String title;

    @PersistentAttribute(name = "r_version_label")
    @ElementCollection(targetClass = String.class)
    private List<String> r_version_label;

    @PersistentAttribute(name = "r_lock_owner")
    private String r_lock_owner;

    @PersistentAttribute(name = "r_lock_date")
    private Date r_lock_date;

    @PersistentAttribute(name = "r_folder_path")
    @ElementCollection(targetClass = String.class)
    private List<String> r_folder_path;

    @PersistentAttribute(name = "r_link_cnt")
    private Integer r_link_cnt;

    @PersistentAttribute(name = "i_folder_id")
    @ElementCollection(targetClass = String.class)
    private List<String> i_folder_id;

    @PersistentAttribute(name = "r_creation_date")
    private Date r_creation_date;

    @PersistentAttribute(name = "r_creator_name")
    private String r_creator_name;

    @PersistentAttribute(name = "r_modify_date")
    private Date r_modify_date;

    @PersistentAttribute(name = "r_modifier")
    private String r_modifier;

    @PersistentAttribute(name = "r_object_type")
    private String r_object_type;

    @PersistentAttribute(name = "object_name")
    private String object_name;

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

    public String getNumero_expediente(){
        return numero_expediente;
    }

    public void setNumero_expediente(String numero_expediente){
        this.numero_expediente = numero_expediente;
    }

    public String getProcedencia(){
        return procedencia;
    }

    public void setProcedencia(String procedencia){
        this.procedencia = procedencia;
    }

    public String getRemitente(){
        return remitente;
    }

    public void setRemitente(String remitente){
        this.remitente = remitente;
    }

    public String getTipo_identificacion(){
        return tipo_identificacion;
    }

    public void setTipo_identificacion(String tipo_identificacion){
        this.tipo_identificacion = tipo_identificacion;
    }

    public String getNumero_identificacion(){
        return numero_identificacion;
    }

    public void setNumero_identificacion(String numero_identificacion){
        this.numero_identificacion = numero_identificacion;
    }

    public String getTipo_documento_origen(){
        return tipo_documento_origen;
    }

    public void setTipo_documento_origen(String tipo_documento_origen){
        this.tipo_documento_origen = tipo_documento_origen;
    }

    public String getNumero_documento_origen(){
        return numero_documento_origen;
    }

    public void setNumero_documento_origen(String numero_documento_origen){
        this.numero_documento_origen = numero_documento_origen;
    }

    public Date getFecha_documento_origen(){
        return fecha_documento_origen;
    }

    public void setFecha_documento_origen(Date fecha_documento_origen){
        this.fecha_documento_origen = fecha_documento_origen;
    }

    public String getUnidad_responsable(){
        return unidad_responsable;
    }

    public void setUnidad_responsable(String unidad_responsable){
        this.unidad_responsable = unidad_responsable;
    }

    public String getAmpliacion_asunto(){
        return ampliacion_asunto;
    }

    public void setAmpliacion_asunto(String ampliacion_asunto){
        this.ampliacion_asunto = ampliacion_asunto;
    }

    public String getDireccion(){
        return direccion;
    }

    public void setDireccion(String direccion){
        this.direccion = direccion;
    }

    public String getDepartamento(){
        return departamento;
    }

    public void setDepartamento(String departamento){
        this.departamento = departamento;
    }

    public String getProvincia(){
        return provincia;
    }

    public void setProvincia(String provincia){
        this.provincia = provincia;
    }

    public String getDistrito(){
        return distrito;
    }

    public void setDistrito(String distrito){
        this.distrito = distrito;
    }

    public String getTelefono(){
        return telefono;
    }

    public void setTelefono(String telefono){
        this.telefono = telefono;
    }

    public String getFax(){
        return fax;
    }

    public void setFax(String fax){
        this.fax = fax;
    }

    public String getEmail(){
        return email;
    }

    public void setEmail(String email){
        this.email = email;
    }

    public Boolean getEs_conforme(){
        return es_conforme;
    }

    public void setEs_conforme(Boolean es_conforme){
        this.es_conforme = es_conforme;
    }

    public Boolean getEs_confidencial(){
        return es_confidencial;
    }

    public void setEs_confidencial(Boolean es_confidencial){
        this.es_confidencial = es_confidencial;
    }

    public Boolean getInicia_pas(){
        return inicia_pas;
    }

    public void setInicia_pas(Boolean inicia_pas){
        this.inicia_pas = inicia_pas;
    }

    public List<String> getAuthors(){
        return authors;
    }

    public void setAuthors(List<String> authors){
        this.authors = authors;
    }

    public List<String> getKeywords(){
        return keywords;
    }

    public void setKeywords(List<String> keywords){
        this.keywords = keywords;
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

    public List<String> getR_version_label(){
        return r_version_label;
    }

    public void setR_version_label(List<String> r_version_label){
        this.r_version_label = r_version_label;
    }

    public String getR_lock_owner(){
        return r_lock_owner;
    }

    public void setR_lock_owner(String r_lock_owner){
        this.r_lock_owner = r_lock_owner;
    }

    public Date getR_lock_date(){
        return r_lock_date;
    }

    public void setR_lock_date(Date r_lock_date){
        this.r_lock_date = r_lock_date;
    }

    public List<String> getR_folder_path(){
        return r_folder_path;
    }

    public void setR_folder_path(List<String> r_folder_path){
        this.r_folder_path = r_folder_path;
    }

    public Integer getR_link_cnt(){
        return r_link_cnt;
    }

    public void setR_link_cnt(Integer r_link_cnt){
        this.r_link_cnt = r_link_cnt;
    }

    public List<String> getI_folder_id(){
        return i_folder_id;
    }

    public void setI_folder_id(List<String> i_folder_id){
        this.i_folder_id = i_folder_id;
    }

    public Date getR_creation_date(){
        return r_creation_date;
    }

    public void setR_creation_date(Date r_creation_date){
        this.r_creation_date = r_creation_date;
    }

    public String getR_creator_name(){
        return r_creator_name;
    }

    public void setR_creator_name(String r_creator_name){
        this.r_creator_name = r_creator_name;
    }

    public Date getR_modify_date(){
        return r_modify_date;
    }

    public void setR_modify_date(Date r_modify_date){
        this.r_modify_date = r_modify_date;
    }

    public String getR_modifier(){
        return r_modifier;
    }

    public void setR_modifier(String r_modifier){
        this.r_modifier = r_modifier;
    }

    public String getR_object_type(){
        return r_object_type;
    }

    public void setR_object_type(String r_object_type){
        this.r_object_type = r_object_type;
    }

    public String getObject_name(){
        return object_name;
    }

    public void setObject_name(String object_name){
        this.object_name = object_name;
    }

    @JsonProperty
    public Map<String, java.lang.Object> getLinks(){
        return LinkSource.getLinks(this);
    }

    @JsonIgnore
    public void setLinks(Map<String,  java.lang.Object> linkSource){
    }
}