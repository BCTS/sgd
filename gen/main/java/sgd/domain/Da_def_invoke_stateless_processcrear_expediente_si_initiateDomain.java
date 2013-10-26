package sgd.domain;

import com.emc.xcp.services.process.annotation.ProcessVariable;
import java.util.Date;
import org.codehaus.jackson.annotate.JsonPropertyOrder;


@JsonPropertyOrder(alphabetic = true)
public class Da_def_invoke_stateless_processcrear_expediente_si_initiateDomain {

    @ProcessVariable(variableName = "ampliacion_asunto")
    private String ampliacion_asunto;

    @ProcessVariable(variableName = "asunto")
    private String asunto;

    @ProcessVariable(variableName = "conforme")
    private Boolean conforme;

    @ProcessVariable(variableName = "departamento")
    private String departamento;

    @ProcessVariable(variableName = "direccion")
    private String direccion;

    @ProcessVariable(variableName = "distrito")
    private String distrito;

    @ProcessVariable(variableName = "email")
    private String email;

    @ProcessVariable(variableName = "es_confidencial")
    private Boolean es_confidencial;

    @ProcessVariable(variableName = "fax")
    private String fax;

    @ProcessVariable(variableName = "fecha_doc_origen")
    private Date fecha_doc_origen;

    @ProcessVariable(variableName = "inicia_pas")
    private Boolean inicia_pas;

    @ProcessVariable(variableName = "numero_doc_origen")
    private String numero_doc_origen;

    @ProcessVariable(variableName = "numero_identificacion")
    private String numero_identificacion;

    @ProcessVariable(variableName = "procedencia")
    private String procedencia;

    @ProcessVariable(variableName = "provincia")
    private String provincia;

    @ProcessVariable(variableName = "remitente")
    private String remitente;

    @ProcessVariable(variableName = "telefono")
    private String telefono;

    @ProcessVariable(variableName = "tipo_doc_origen")
    private String tipo_doc_origen;

    @ProcessVariable(variableName = "tipo_identificacion")
    private String tipo_identificacion;

    @ProcessVariable(variableName = "unidad_responsable")
    private String unidad_responsable;

    public String getAmpliacion_asunto(){
        return ampliacion_asunto;
    }

    public void setAmpliacion_asunto(String ampliacion_asunto){
        this.ampliacion_asunto = ampliacion_asunto;
    }

    public String getAsunto(){
        return asunto;
    }

    public void setAsunto(String asunto){
        this.asunto = asunto;
    }

    public Boolean getConforme(){
        return conforme;
    }

    public void setConforme(Boolean conforme){
        this.conforme = conforme;
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

    public String getFax(){
        return fax;
    }

    public void setFax(String fax){
        this.fax = fax;
    }

    public Date getFecha_doc_origen(){
        return fecha_doc_origen;
    }

    public void setFecha_doc_origen(Date fecha_doc_origen){
        this.fecha_doc_origen = fecha_doc_origen;
    }

    public Boolean getInicia_pas(){
        return inicia_pas;
    }

    public void setInicia_pas(Boolean inicia_pas){
        this.inicia_pas = inicia_pas;
    }

    public String getNumero_doc_origen(){
        return numero_doc_origen;
    }

    public void setNumero_doc_origen(String numero_doc_origen){
        this.numero_doc_origen = numero_doc_origen;
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

    public String getTipo_doc_origen(){
        return tipo_doc_origen;
    }

    public void setTipo_doc_origen(String tipo_doc_origen){
        this.tipo_doc_origen = tipo_doc_origen;
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

}