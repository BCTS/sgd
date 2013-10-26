package sgd.domain;

import com.emc.xcp.persistence.annotation.CustomAttribute;
import com.emc.xcp.persistence.annotation.PersistentAttribute;
import com.emc.xcp.persistence.annotation.PersistentId;
import com.emc.xcp.persistence.annotation.PersistentObject;
import com.emc.xcp.services.core.annotation.Linked;
import com.emc.xcp.services.datasource.domain.MatchingTerms;
import com.emc.xcp.services.datasource.domain.Summary;
import com.emc.xcp.services.framework.domain.LinkSource;
import java.util.Date;
import java.util.List;
import java.util.Map;
import org.codehaus.jackson.annotate.JsonIgnore;
import org.codehaus.jackson.annotate.JsonProperty;
import org.codehaus.jackson.annotate.JsonPropertyOrder;


@PersistentObject(superType = "dm_sysobject", type = "sgd_expediente_sisged")
@Linked(template = "/application/sgd_expediente_sisgeds")
@JsonPropertyOrder(alphabetic = true)
public class Buscar_sisgedDataSourceOutput {

    @PersistentId
    @PersistentAttribute(name = "r_object_id")
    @Linked
    private String id;

    @CustomAttribute(id = "effectivePermissionsHandler")
    private List<String> effectivePermissions;

    @PersistentAttribute(name = "numero_expediente")
    private String numero_expediente;

    @PersistentAttribute(name = "remitente")
    private String remitente;

    @PersistentAttribute(name = "subject")
    private String subject;

    @PersistentAttribute(name = "unidad_responsable")
    private String unidad_responsable;

    @PersistentAttribute(name = "r_creation_date")
    private Date r_creation_date;

    @PersistentAttribute(name = "tipo_documento_origen")
    private String tipo_documento_origen;

    @PersistentAttribute(name = "numero_documento_origen")
    private String numero_documento_origen;

    @PersistentAttribute(name = "fecha_documento_origen")
    private Date fecha_documento_origen;

    @PersistentAttribute(name = "r_object_type")
    private String r_object_type;

    @Summary
    private String summary;

    @MatchingTerms
    private List<String> matchingterms;

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

    public String getRemitente(){
        return remitente;
    }

    public void setRemitente(String remitente){
        this.remitente = remitente;
    }

    public String getSubject(){
        return subject;
    }

    public void setSubject(String subject){
        this.subject = subject;
    }

    public String getUnidad_responsable(){
        return unidad_responsable;
    }

    public void setUnidad_responsable(String unidad_responsable){
        this.unidad_responsable = unidad_responsable;
    }

    public Date getR_creation_date(){
        return r_creation_date;
    }

    public void setR_creation_date(Date r_creation_date){
        this.r_creation_date = r_creation_date;
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

    public String getR_object_type(){
        return r_object_type;
    }

    public void setR_object_type(String r_object_type){
        this.r_object_type = r_object_type;
    }

    public String getSummary(){
        return summary;
    }

    public void setSummary(String summary){
        this.summary = summary;
    }

    public List<String> getMatchingterms(){
        return matchingterms;
    }

    public void setMatchingterms(List<String> matchingterms){
        this.matchingterms = matchingterms;
    }

    @JsonProperty
    public Map<String, java.lang.Object> getLinks(){
        return LinkSource.getLinks(this);
    }

    @JsonIgnore
    public void setLinks(Map<String,  java.lang.Object> linkSource){
    }
}